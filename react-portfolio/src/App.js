
import './App.css';
import Header from "./components/Header/Header.js";
// import Main from "./src/pages/Main";
// import Projects from "./src/pages/Projects";
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Header />
        {/* <Route path="/" component={Main} />
        <Route exact path="projects" component={Projects} /> */}
      </Router>
    </div>
  );
}

export default App;
