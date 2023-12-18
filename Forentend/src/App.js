import { Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import  Footer  from "./Component/Footer";
import Login from "./Component/Login";
import Food from "./Component/Food";
import './assests/common.css';
import Carousel from "./Component/Carousel";
import Register from "./Component/Register";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className="AppParent"> 
    <Routes> 
      {/* <Route path="/" element={< Footer />} /> */}
      <Route path="/login" element={< Login />} />
      <Route path="/food" element={ <Food />} />
      <Route path="/carousel" element={ <Carousel /> } />
      <Route path="/register" element={<Register />} />
    </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
