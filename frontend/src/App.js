import { Switch, Route } from "react-router-dom";
import LoginPage from "pages/index";
import EncoderPage from "pages/encoder";
import AuditorPage from "pages/auditor";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/encoder" component={EncoderPage} />
        <Route path="/auditor" component={AuditorPage} />
      </Switch>
    </>
  );
}

export default App;
