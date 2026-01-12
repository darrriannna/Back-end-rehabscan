import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./pages/Home";
import MR from "./pages/MRServices";
import CartPage from "./pages/CartPage";
import Mottagningar from "./pages/Mottagningar";
import Test from "./pages/TestServices";
import BookingPage from "./pages/Booking";
import CartMessage from "./components/CartMessage";
import ServiceProduct from "./pages/ServiceProduct";
import TestProduct from "./pages/TestProduct";
import Kontakt from "./pages/Kontakt";
import OmOss from "./pages/OmOss";
import HurFungerar from "./pages/HurFungerar";
import Search from "./pages/Search";
import IntegrityPolicy from "./pages/Integritet";
import Restrictions from "./pages/Villkor";
import Helkropp from "./pages/Helkropp";
import UltraljudPage from "./pages/Ultraljud";
import Success from "./pages/Success";
import Cancel from "./pages/Failed";
import PresentSteps from "./pages/Presentkort";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <>
      <CartMessage />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mr-undersokningar" element={<MR />} />
        <Route path="/halsotester" element={< Test />} />
        <Route path="/integritet" element={<IntegrityPolicy />} />
        <Route path="/villkor" element={<Restrictions />} />
        <Route path="/varukorg" element={<CartPage />} />
        <Route path="/kontakta" element={<Kontakt />} />
        <Route path="/om-oss" element={<OmOss />} />
        <Route path="/ultraljud" element={<UltraljudPage />} />
        <Route path="/helkropp" element={<Helkropp />} />
        <Route path="/mer-info" element={<Search />} />
        <Route path="/hur-fungerar-det" element={<HurFungerar />} />
        <Route path="/mottagningar" element={<Mottagningar />} />
        <Route path="/bokning" element={<BookingPage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/magnetrontgen/:id" element={<ServiceProduct />} />
        <Route path="/halsokontroll/:id" element={<TestProduct />} />
        <Route path="/presentkort" element={<PresentSteps />} />
      </Routes></>
  );
}

export default App;

