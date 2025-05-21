import About from "./About";
import Contact from "./components/Contact";
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import Singup from "./components/auth/Signup";
import PageLayout from "./components/layouts/PageLayout";
import { BrowserRouter, Route, Routes } from "react-router";
import CartPage from "./components/ui/CartPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<Singup />} />
            <Route path="login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
