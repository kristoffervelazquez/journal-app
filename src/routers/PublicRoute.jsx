import { Navigate } from "react-router-dom"


const PublicRoute = ({ children, isLoggedIn }) => {

    console.log(isLoggedIn)

    return isLoggedIn
        ? <Navigate to='/' replace/>
        : children

}

export default PublicRoute