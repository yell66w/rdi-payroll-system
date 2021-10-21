import { Switch, Route, useHistory } from "react-router-dom";
import IndexPage from "pages/index";
import EncoderPage from "pages/encoder";
import AuditorPage from "pages/auditor";
import { useEffect } from "react";

import { useSelector } from "react-redux";

function App() {
  const { username } = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      history.push(`/`);
    } else {
      history.push(`/${username}`);
    }
  }, [username]);
  return (
    <>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
