import Cookies from "js-cookie";
import { useContext } from "react";
import AuthApi from "../../AuthApi/AuthApi";

export interface LogoutProps {}

const Logout: React.FC<LogoutProps> = () => {
  const { setAuth } = useContext(AuthApi);

  const handleClick = () => {
    Cookies.remove("user");
    setAuth(false);
  };

  return (
    <>
      <div>Logout</div>
      <button onClick={handleClick}>Logout</button>
    </>
  );
};

export default Logout;
