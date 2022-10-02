
import './App.css';
import Navbar from './Componants/Navbar/Navbar';
import {Routes,Route} from "react-router-dom";
import Home from './Routes/Home';
import Men from './Componants/Men/Men';
import Footer from "./Componants/Footer/Footer"
function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Men" element={<Men/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
