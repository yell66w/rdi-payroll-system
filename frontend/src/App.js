import { Switch, Route } from "react-router-dom";
import IndexPage from "pages/index";
import LoginPage from "pages/Login";
import MainPage from "containers/Main";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/login/:name" component={LoginPage} />
        <Route path="/encoder" component={MainPage} />
        <Route path="/auditor" component={MainPage} />
      </Switch>
    </>
  );
}

export default App;
