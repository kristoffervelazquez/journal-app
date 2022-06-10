import { Navigate } from "react-router-dom"


const PublicRoute = ({ children, isLoggedIn }) => {

    return isLoggedIn
        ? <Navigate to='/' replace/>
        : children

}

export default PublicRoute