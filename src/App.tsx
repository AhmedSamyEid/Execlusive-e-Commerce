import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/pages/Cart";
import PageLayout from "./components/layouts/PageLayout";
import Singup from "./components/auth/Signup";
import Login from "./components/auth/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<Singup />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
