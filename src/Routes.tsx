import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import MainLayout from "./hoc/mainLayout";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Info from "./components/Info/Info";
import AuthApi from "./AuthApi/AuthApi";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

interface ProtectedRouteProps {
  component: React.ComponentType;
  auth?: boolean;
  exact?: boolean;
  path: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  auth,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={() => (auth ? <Component /> : <Redirect to="/login" />)}
    />
  );
};
const ProtectedLogin: React.FC<ProtectedRouteProps> = ({
  component: Component,
  auth,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={() => (!auth ? <Component /> : <Redirect to="Info" />)}
    />
  );
};

function Routes() {
  const [auth, setAuth] = useState(false);
  const readCookies = () => {
    const user = Cookies.get("user");
    if (user) {
      setAuth(true);
    }
  };

  useEffect(() => {
    readCookies();
  }, [auth]);

  return (
    <AuthApi.Provider value={{ auth, setAuth }}>
      <Router>
        <MainLayout>
          <Switch>
            <ProtectedLogin auth={auth} path="/login" component={Login} />
            <ProtectedRoute auth={auth} path="/info" component={Info} exact />
            <Route path="/" component={Home} exact />
          </Switch>
        </MainLayout>
      </Router>
    </AuthApi.Provider>
  );
}

export default Routes;
