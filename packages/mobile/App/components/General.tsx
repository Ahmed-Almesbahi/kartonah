import {getUserLocation} from 'app-redux/actions/api';
import {setCountryCode} from 'app-redux/actions/general';
import {useEffect} from 'react';
import publicIP from 'react-native-public-ip';
import {useDispatch, useSelector} from 'react-redux';

const General = () => {
    const dispatch = useDispatch();
    const foundCountry = useSelector(state => state.general.foundCountry);

    useEffect(() => {
        if (!foundCountry) {
            publicIP()
                .then(ip => {
                    dispatch(getUserLocation(ip)).then(({data}) => {
                        if (data != undefined) {
                            dispatch(setCountryCode(data.countryCode));
                        }
                    });
                    // '47.122.71.234'
                })
                .catch(error => {
                    console.log(error);
                    // 'Unable to get IP address.'
                });
        }
    }, []);

    return null;
};

export default General;
