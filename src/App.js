
import {
    BrowserRouter as Router  ,
    Routes,
    Route,
    
    
   } from "react-router-dom";
import NavBar from "./components/NavBar";
import './App.css';
import Home from './page/Home';
import Activities from './page/Activities'
import AboutUs from './page/AboutUs'
import Contact from "./page/Contact";

function App() {
  return (
    <div>

      <Router>
            <NavBar/>                   
            <Routes Routes>
                <Route  path="/" element={<Home/>}/>                       
                <Route path="/Activities" element={<Activities/>}/>
                <Route path="/AboutUs" element={<AboutUs/>}/>
                <Route path="/Contact" element={<Contact/>}/>
            </Routes>                  
        </Router>

    </div>
    
  );
}

export default App;
