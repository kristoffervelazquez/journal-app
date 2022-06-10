import { getAuth } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import JournalScreen from '../components/journal/JournalScreen'
import AuthRouter from './AuthRouter'
import { login } from '../actions/auth'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import {startLoadingNotes } from '../actions/notes'



const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const auth = getAuth()

        auth.onAuthStateChanged( async (user) => {

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
                dispatch(startLoadingNotes(user.uid))
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false)
            }           

            

            setTimeout(() => {
                setChecking(false)

            }, 1000);

        })
    }, [])

    if (checking) {
        return (
            <div className="auth__main">
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        )
    }




    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <PrivateRoute isLoggedIn={isLoggedIn}>
                        <JournalScreen />
                    </PrivateRoute>
                } />

                <Route path='auth/*' element={
                    <PublicRoute isLoggedIn={isLoggedIn}>
                        <AuthRouter />
                    </PublicRoute>
                } />

                <Route path='*' element={<Navigate replace to="/auth/login" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter