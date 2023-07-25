import React from 'react';
import { IdleTimerProvider } from 'react-idle-timer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { URL_HOME } from '../../constants/url/urlFront';
import { logout } from '../../store/accountSLice';

/**
 * Component to automatically handle deconnection after a certain time
 *
 * @author Peter Mollet
 */
const IdleTimerCustom = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const timeOut = 1000 * 60 * 15;

    const handleOnAction = () => {
        clearTimeout(timeOut);
    };

    const handleOnIdle = () => {
        toast.warn('Idle timed out');
        dispatch(logout());
        navigate(URL_HOME);
    };

    return (
        <IdleTimerProvider
            timeout={timeOut}
            onActive={handleOnAction}
            onIdle={handleOnIdle}
            onAction={handleOnAction}
            debounce={500}
        />
    );
};

export default IdleTimerCustom;
