import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import "./App.css";
import ScrollToTop from "./components/ui/ScrollToTop";

const App = () => {
  return (
    <Router basename="/plitka">
      <ScrollToTop />
      <div className="flex flex-col w-full min-h-screen bg-[var(--color-bg)] text-[var(--color-dark)]">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
