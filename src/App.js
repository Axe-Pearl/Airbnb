import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Booking/Details";
import Home from "./Home/Home";
// import Footer from "./Home/Header";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path='/bookmychoice' element={<Details/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
