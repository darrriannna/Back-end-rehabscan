import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MR from "./pages/MRServices";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mr-undersokningar" element={<MR />} />
      <Route path="/varukorg" element={<CartPage />} />
    </Routes>
  );
}

export default App;

