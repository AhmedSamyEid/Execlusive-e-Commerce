import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/pages/Cart";
import PageLayout from "./components/layouts/PageLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
