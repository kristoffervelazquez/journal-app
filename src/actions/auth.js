import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth"
import { googleAuthProvider } from "../firebase/firebaseConfig"
import { types } from "../types/types"
import { uiStartLoading, uiFinishLoading } from "./ui"
import { noteLogout } from './notes'

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});


export const startLoginWithEmailPassword = (email, password) => {


    return (dispatch) => {
        // Se establece loading: true
        dispatch(uiStartLoading());
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: e.code
                })
                console.error(e.code);
            })
        // Se establece loading: false    
        dispatch(uiFinishLoading());
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        // Se establece loading: true
        dispatch(uiStartLoading());
        const auth = getAuth();

        // Se crea el usuario con el correo y la contraseña
        createUserWithEmailAndPassword(auth, email, password)
            // Se desestructura el usuario para actualizar el displayName al nombre del parametro
            .then(async ({ user }) => {
                await updateProfile(user, { displayName: name });
            }).catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: e.code
                })
                console.error(e.code);

            })
        // Se establece loading: false    
        dispatch(uiFinishLoading());

    }
}

export const startGoogleLogin = () => {

    return () => {
        try {
            const auth = getAuth();
            signInWithPopup(auth, googleAuthProvider)
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: e.code
            })
            console.error(e.code);
        }


    }
}

const logout = () => ({
    type: types.logout
})

export const startLogout = () => {
    return async (dispatch) => {
        const auth = getAuth();
        await auth.signOut();
        dispatch(logout());
        dispatch(noteLogout());
    }
}