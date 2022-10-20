import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Mainpages from "./pages/Mainpages";
import LoginPages from "./pages/LoginPages";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Mainpages" component={Mainpages} />
          <Content>
            <div>
              <Route path="/" component={LoginPages} />
            </div>
          </Content>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
