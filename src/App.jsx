import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import AirFreight from "./pages/AirFreight";
import SeaFreight from "./pages/SeaFreight";
import OverlandFreight from "./pages/OverlandFreight";
import CustomsClearance from "./pages/CustomsClearance";


function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/air-freight" element={<AirFreight />} />
        <Route path="/sea-freight" element={<SeaFreight />} />
        <Route path="/overland-freight" element={<OverlandFreight />} />
        <Route path="/customs-clearance" element={<CustomsClearance />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
