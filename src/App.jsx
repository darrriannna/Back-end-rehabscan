import { Routes, Route } from "react-router-dom";
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



function App() {
  return (
    <>
      <CartMessage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mr-undersokningar" element={<MR />} />
        <Route path="/halsotester" element={< Test />} />
        <Route path="/varukorg" element={<CartPage />} />
        <Route path="/kontakta" element={<Kontakt />} />
        <Route path="/om-oss" element={<OmOss />} />
        <Route path="/hur-fungerar-det" element={<HurFungerar />} />
        <Route path="/mottagningar" element={<Mottagningar />} />
        <Route path="/bokning" element={<BookingPage />} />
        <Route path="/magnetrontgen/:id" element={<ServiceProduct />} />
        <Route path="/halsokontroll/:id" element={<TestProduct />} />

      </Routes></>
  );
}

export default App;

