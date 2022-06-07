import { getAuth, signInWithPopup } from "firebase/auth"
import { googleAuthProvider } from "../firebase/firebaseConfig"
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

export const startGoogleLogin = () => {

    return (dispatch) => {
        const auth = getAuth();

        signInWithPopup(auth, googleAuthProvider)
            .then(({user}) => {
                dispatch(login(user.uid, user.displayName))
            })

    }
}
