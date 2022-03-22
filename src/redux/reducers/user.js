import { SIGN_UP, SIGN_IN, LOAD, FAIL, LOG_OUT } from "./../actionType/user";

const initialeState = {
    user: {},
    load: false,
    errors: [],
    isAuth: false,
};

const userReducer = (state = initialeState, { type, payload }) => {
    switch (type) {
        case LOAD:
            return { ...state, load: true };
        case SIGN_IN:
            localStorage.setItem("token", payload.token);
            return { ...state, user: payload.user, load: false, isAuth: true };
        case SIGN_UP:
            localStorage.setItem("token", payload.token);
            return { ...state, user: payload.user, load: false, isAuth: true };
        case FAIL:
            return { ...state, load: false, errors: payload };
        case LOG_OUT:
            localStorage.removeItem("token");
            return {
                user: {},
                load: false,
                errors: [],
                isAuth: false,
            };

        default:
            return state;
    }
};
export default userReducer;
