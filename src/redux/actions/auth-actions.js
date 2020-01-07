// LOGIN
export const LOGIN = "LOGIN";

export function login(user, token) {
    return {
        type: LOGIN,
        user: user,
        token: token
    }
};
