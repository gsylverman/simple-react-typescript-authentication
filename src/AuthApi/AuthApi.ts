import { createContext } from "react";

interface AuthApiI {
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthApi = createContext<AuthApiI>({ auth: false, setAuth: () => {} });
export default AuthApi;
