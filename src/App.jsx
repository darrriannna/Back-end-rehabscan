import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MR from "./pages/MRServices";
import CartPage from "./pages/CartPage";
import Mottagningar from "./pages/Mottagningar";
import Test from "./pages/TestServices";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mr-undersokningar" element={<MR />} />
      <Route path="/halsotester" element={< Test />} />
      <Route path="/varukorg" element={<CartPage />} />
      <Route path="/mottagningar" element={<Mottagningar />} />
    </Routes>
  );
}

export default App;

