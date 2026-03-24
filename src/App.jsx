import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FirstTimeBuyers from "./pages/FirstTimeBuyers";
import NewConstruction from "./pages/NewConstruction";
import Buying from "./pages/Buying";
import Selling from "./pages/Selling";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/first-time-buyers" element={<FirstTimeBuyers />} />
            <Route path="/new-construction" element={<NewConstruction />} />
            <Route path="/buying" element={<Buying />} />
            <Route path="/selling" element={<Selling />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
