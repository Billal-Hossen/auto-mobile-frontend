import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Booking from './Pages/Booking/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/booking/:serviceId" element={<Booking/>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound/>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
