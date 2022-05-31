
import {
    BrowserRouter   ,
    Routes,
    Route,
    
    
   } from "react-router-dom";
import NavBar from "./components/NavBar";
import './App.css';
import Home from './page/Home';
import Activities from './page/Activities'
import AboutUs from './page/AboutUs'
import Contact from "./page/Contact";
import Footer from "./components/Footer"
import SaltoOvino from "./page/SaltoOvino"

function App() {
  return (
  
    <div>
        <BrowserRouter>
        
            <NavBar />
            <div >
                <Routes  >
                    <Route  path="/" element={<Home/>}/>                       
                    <Route path="/Activities" element={<Activities/>}/>
                    <Route path="/AboutUs" element={<AboutUs/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                    <Route path="/SaltoOvino" element={<SaltoOvino/>}/>
                </Routes>                 
            </div>                   
             <Footer/>
        </BrowserRouter>

    </div>
      


    
  );
}

export default App;
