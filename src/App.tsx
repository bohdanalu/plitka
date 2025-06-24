import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import CalculatorPage from "./pages/CalculatorPage";
import PortfolioPage from "./pages/PortfolioPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col w-full min-h-screen bg-[var(--color-bg)] text-[var(--color-dark)]">
        <Header />
        <main className="flex-1 pt-[65px]">
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/calculator" element={<CalculatorPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
