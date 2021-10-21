import { Switch, Route } from "react-router-dom";
import LoginPage from "pages/Login";
import HomePage from "pages/Home";
function App() {
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
