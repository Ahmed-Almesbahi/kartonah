// import {call, put, takeLatest} from 'redux-saga/effects';
// import apiService from 'api';
// import {AnyAction} from 'redux';

// // worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* fetchUser(action: AnyAction) {
//   try {
//     const user = yield call(
//       apiService.auth.login,
//       action.payload.phone,
//       action.payload.password,
//     );
//     yield put({type: 'USER_LOGIN_SUCCEEDED', user});
//   } catch (e) {
//     yield put({type: 'USER_LOGIN_FAILED', message: e.message});
//   }
// }

// /*
//   Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
//   Allows concurrent fetches of user.
// */
// function* sagas() {
//   yield takeLatest('USER_LOGIN', fetchUser);
// }

// export default sagas;
