import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import Portfolio from "./pages/Portfolio";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col w-full min-h-screen bg-[var(--color-bg)] text-[var(--color-dark)]">
        <Header />
        <main className="flex-1 pt-[65px]">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
