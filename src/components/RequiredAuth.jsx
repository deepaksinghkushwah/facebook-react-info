import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../store/useStore";
import PropTypes from 'prop-types';
function RequiredAuth() {
  
  const token = useUserStore(state => state.token);
  //console.log(token);
  return (
   token != null
    ? <Outlet/> 
    : <Navigate to="/login"  />
  )
}
RequiredAuth.propTypes = {
  allowedRoles: PropTypes.array,
};
export default RequiredAuth;
