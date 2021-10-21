import { Switch, Route, useHistory } from "react-router-dom";
import IndexPage from "pages/index";
import { useEffect } from "react";

import { useSelector } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { isError } = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token && isError) {
      history.push(`/`);
    }
  }, [isError]);
  return (
    <>
      <ToastContainer />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
