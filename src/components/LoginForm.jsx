
import { useUserStore } from "../store/useStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FacebookLogin from 'react-facebook-login';

const LoginForm = () => {
  const login = useUserStore((state) => state.login);
  const navigate = useNavigate();
  function responseFacebook(response) {
    console.log(response);
    if (response) {
      login(response);
      toast.success("You are logged in");
      navigate("/profile");
    }
  }

  return (
    <div className="col-5 mx-auto border">
      <FacebookLogin
              appId="1321963728776504"
              autoLoad={true}
              fields="name,email,picture"
              scope="public_profile"
              callback={responseFacebook}
              icon="fa-facebook" />
    </div>
  );
};

export default LoginForm;
