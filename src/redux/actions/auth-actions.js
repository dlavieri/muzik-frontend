// LOGIN
export const LOGIN = "LOGIN";

export function login(user, token) {
    return {
        type: LOGIN,
        user: user,
        token: token
    }
};

// LOGOUT

export const LOGOUT = "LOGOUT";

export function logout() {
    return {
        type: LOGOUT
    }
};