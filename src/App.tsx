import About from "./About";
import { useEffect } from "react";
import Home from "./components/pages/Home";
import Contact from "./components/Contact";
import CartPage from "./components/ui/CartPage";
import PageLayout from "./components/layouts/PageLayout";
import Login from "./modules/auth/login/components/loginForme";
import Signup from "./modules/auth/signup/components/signupForme";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("Users");
  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true }); 
    }
  }, [token, navigate]);
  if (!token) {
    return null; 
  }
  return <>{children}</>;
}
function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("Users");
    if (token) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return <Login />; 
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
