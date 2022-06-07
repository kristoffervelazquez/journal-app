import { types } from "../types/types"


const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})


export const startLoginWithEmailPassword = (email, password) => {

    return (dispatch) => {

        setTimeout(() => {
            dispatch(login(123, 'Pepe'))
        }, 3500)

    }
}


