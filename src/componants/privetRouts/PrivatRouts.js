import { Outlet, Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { UserStatus } from "../RecoilAtoms/User.Atom";
import toast from "react-hot-toast";

const LoginState = () => {
  // check if user is logged in
  const LoginStates = useRecoilValue(UserStatus);
  if (LoginStates) {
    return <Outlet />;
  } else {
    return (
      <>
      <Navigate to="/Login-Page" />
        {
          toast.error("you must be logged in")
      }
      </>
    );
  }
}



export default LoginState;