import { Navigate } from "react-router-dom";

export const PrivateRoute = ({Component}) => {
    const isAuthenticated = window.localStorage.getItem("Token");
    if (isAuthenticated !== null) {
        return <Component/>
    }else{
        <Navigate to="/"/>
    }
 
}
