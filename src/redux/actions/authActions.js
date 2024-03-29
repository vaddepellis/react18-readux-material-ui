// src/redux/actions/userActions.js
export const loginSuccess = (user) => {
    return { type: 'LOGIN_SUCCESS', payload: user };
};

export const loginFailure = (error) => {
    return { type: 'LOGIN_FAILURE', payload: error };
};

export const logout = () => {
    return { type: 'LOGOUT' };
};
