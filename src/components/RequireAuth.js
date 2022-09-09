//component to helps protect routes
import { useLocation, Navigate,Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({allowedRoles}) => {
    const {auth} = useAuth();
    const location = useLocation();

  return (
    auth?.courseRoles?.find(role => allowedRoles?.includes(role))
        ? <Outlet /> //user with page roles can only access role protected page
        : auth?.user 
          ? <Navigate to='/unauthorized' state={{from: location}} replace /> // user with no access to this pages
          :<Navigate to='/login' state={{from: location}} replace />
        // Navigate helps to replace route-where user-with-no-access is coming from with /login, 
        // state={{from: location}} helps browser to remember where user was bfor he/she was redirected to login bcos of no access

        // need to implement on login so after login it takes us to where we were header and also remembers where user is coming from
  );
}

export default RequireAuth