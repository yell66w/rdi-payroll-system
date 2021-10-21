import { Switch, Route } from "react-router-dom";
import IndexPage from "pages/index";
import EncoderPage from "pages/encoder";
import AuditorPage from "pages/Auditor/index.jsx";
import LoginPage from "pages/Login";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/login/:name" component={LoginPage} />
        <Route path="/encoder" component={EncoderPage} />
        <Route path="/auditor" component={AuditorPage} />
      </Switch>
    </>
  );
}

export default App;
