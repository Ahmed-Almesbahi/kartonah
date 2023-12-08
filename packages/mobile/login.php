<?php

namespace app\Http\Controllers;

use App\Http\Controllers\Controller;
use Firebase\Auth\Token\Exception\InvalidToken;
use Illuminate\Http\Request;




class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['vndrsByVndrCatId', 'show', 'usersByGroup', 'register', 'login', 'loginFirebase', 'resetPassword', 'resendActivation', 'activation']]);
    }


    /**
     * Please install this
     * composer require Kreait/laravel-firebase
     * 
     * 
     * follow installation guide in this URL
     * https://medium.com/firebase-developers/how-to-link-google-firebase-auth-and-laravel-passport-users-244b73567594
     */
    public function loginFirebase(Request $request)
    {

        if (trim(strlen($request->phone)) < 11 or trim(strlen($request->phone)) > 13) {
            return response()->json(['msg' => trans('general.phoneRequired'), 'success' => false]);
        }


        if (!isset($request->firebase_token)) {
            return response()->json(['msg' => trans('general.tokenRequired'), 'success' => false]);
        }

        // Launch Firebase Auth
        $auth = app('firebase.auth');
        // Retrieve the Firebase credential's token
        $firebase_token = $request->firebase_token;

        try { // Try to verify the Firebase credential token with Google

            $verifiedIdToken = $auth->verifyIdToken($firebase_token);
        } catch (\InvalidArgumentException $e) { // If the token has the wrong format

            return response()->json([
                'msg' => 'Unauthorized - Can\'t parse the token: ' . $e->getMessage()
            ]);
        } catch (InvalidToken $e) { // If the token is invalid (expired ...)

            return response()->json([
                'msg' => 'Unauthorized - Token is invalide: ' . $e->getMessage()
            ]);
        }


        // Retrieve the UID (User ID) from the verified Firebase credential's token
        $uid = $verifiedIdToken->getClaim('sub');




        $row = User::where('firebaseUID', $uid)
            ->where('isDeleted', 0)
            ->first();

        if (!is_null($row)) {


            if ($row->status == 1) {



                // get favs
                $favs = UserFavourite::where('userId', $row->id)->get(); //->with('product')
                $favouritesIds = $favs->pluck('productId');

                $accessToken = $row->createToken('authToken')->accessToken;

                return response()->json([
                    'msg' => '',
                    'success' => true,
                    'user' => $row,
                    'favouritesIds' => $favouritesIds,
                ]);
            }

            return response()->json(['msg' => trans('general.cntctAdmn2ActvtAccnt'), 'success' => false]);
        }

        // create a user.
        $row = User::create([
            'phone' => $request->phone,
            'status' => 1,
            'password' => rand(100000, 999999),
            'firebaseUID' => $uid
        ]);

        if ($row) {

            // create an OAuth 2.0 accessToken to be returned.
            $accessToken = $row->createToken('authToken')->accessToken;

            return response()->json([
                'msg' => trans('general.registered_successfully'),
                'success' => true,
                'user' => $row,
            ]);
        }
        return response()->json([
            'msg' => trans('general.sorryTryAgain'),
            'success' => false
        ]);
    }
}
