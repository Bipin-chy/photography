
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import './App.css';
import Footer from "./Components/Footer";
import Home from './Components/Home';
import AboutPage from './Components/AboutPage';
import GalleryPage from "./Components/GalleryPage";


function App() {
  return (
      <>
        <Router>
              <Navbar />
              <Switch>
                <Route path="/" exact  component={Home} />
                <Route path="/about" exact  component={AboutPage} />
                <Route path="/gallery" exact  component={GalleryPage} />
              </Switch>
        </Router>
        <Footer/>
      </>
 
  );
}

export default App;

