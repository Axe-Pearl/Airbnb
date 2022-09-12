import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Booking/Details";
import Home from "./Home/Home";
import Booked from "./Components/Booked/Booked"
import Signin from './Components/Signin/Signin';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path ="/signin" element={<Signin />}></Route>
        <Route path='/bookmychoice' element={<Details/>}></Route>
        <Route path='/booked' element = {<Booked />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
