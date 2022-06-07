import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import JournalScreen from '../components/journal/JournalScreen'
import AuthRouter from './AuthRouter'



const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<JournalScreen />} />
                <Route path='auth/*' element={<AuthRouter />} />
                <Route path='*' element={<Navigate replace to="/auth/login" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter