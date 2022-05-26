import { useEffect, useState } from "react";
import { Switch, Route } from "react-router";
import Dashboard from "../pages/dashboard";
import Landingpage from "../pages/landingpage";
import Login from "../pages/login/index";
import Signup from "../pages/signup";

const Routes = () => {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@POLIDA:token"));
    if (token) {
      setToken(token);
      return setAuth(true);
    }
  }, [auth]);

  return (
    <Switch>
      <Route exact path="/">
        <Landingpage />
      </Route>
      <Route exact path="/login">
        <Login auth={auth} setAuth={setAuth} />
      </Route>
      <Route path="/signup">
        <Signup auth={auth} />
      </Route>
      <Route path="/dashboard">
        <Dashboard auth={auth} setAuth={setAuth} token={token} />
      </Route>
    </Switch>
  );
};
export default Routes;
