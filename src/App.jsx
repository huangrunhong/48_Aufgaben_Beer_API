import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BierList from "./pages/BierList";
import BierDetail from "./pages/BierDetail";
import "./App.scss";
import RandomBeer from "./pages/RandomBeer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bierlist" element={<BierList />} />
          <Route path="/dynamic-router/:beers" element={<BierDetail />} />
          <Route path="/randombeer" element={<RandomBeer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
