import { _getUsers } from '../utils/_DATA';
export const LOGIN_USER = 'LOGIN_USER';
export const GET_USERS = 'GET_USERS';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loginUser = (data) => {
    return {
        type: LOGIN_USER,
        payload: data,
    };
};

export const logoutUser = () => {
    return {
        type: LOGOUT_USER,
    };
};
export const fetchUsers = (users) => ({
    type: GET_USERS,
    payload: users,
});

export const getUsers = () => async (dispatch) => {
    return _getUsers()
        .then((resp) => {
            dispatch(fetchUsers(resp));
        })
        .catch((err) => {
            console.log(err);
            alert(err.message);
        });
};
