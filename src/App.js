
import './App.css';
import Navbar from './Componants/Navbar/Navbar';
import {Routes,Route} from "react-router-dom";
import Home from './Routes/Home';
import Men from './Componants/Men/Men';
function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/men" element={<Men/>}/>
      </Routes>
    </div>
  );
}

export default App;
