import './App.css';
import Header from "./components/Header/Header.js";
import Main from "../src/pages/Main/Main";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact"
import Footer from "./components/Footer/Footer.js"
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <div className="container-content">
      <Router>
        <Header />
        <Route exact path="/" component={Main} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact}/>
      </Router>
      </div>
      
      <div className="container-footer">
      <Footer />
      </div>
    </div>
    
  );
}

export default App;
