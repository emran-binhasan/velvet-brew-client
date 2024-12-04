import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./provider/AuthProvider";
import Loading from "./components/Loading";



export default function PrivateRoute({children}) {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <Loading/>
    }
    if(user && user?.email){
        return children
    }else{
    return <Navigate to={'/login'}></Navigate>
    }

}
