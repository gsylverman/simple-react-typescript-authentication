import { useContext } from "react";
import AuthApi from "../../AuthApi/AuthApi";
import Cookies from "js-cookie";

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const { setAuth } = useContext(AuthApi);
  const handleClick = () => {
    setAuth(true);
    Cookies.set("user", "loginTrue", { expires: 7 });
  };
  return (
    <>
      Login
      <button onClick={handleClick} className="btn btn-primary">
        Login
      </button>
    </>
  );
};

export default Login;
