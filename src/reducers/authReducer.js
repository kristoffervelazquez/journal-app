import { types } from "../types/types";

/*
    {
        uid: j12h3j21k3123213,
        name: 'Kristoffer'
    }

*/

const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case types.logout:
            return {logged: false};

        default:
            return state;

    }
}

export default authReducer;