import React from 'react'
import {Navigate, Route, Routes } from 'react-router-dom'
import JournalScreen from '../components/journal/JournalScreen'
import AuthRouter from './AuthRouter'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<JournalScreen />} />
            <Route path='auth/*' element={<AuthRouter />} />
            <Route path='*' element={<Navigate replace to="/auth/login" />} />
        </Routes>
    )
}

export default AppRouter