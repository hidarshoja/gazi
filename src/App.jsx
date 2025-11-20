import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import VillageIntro from "./pages/VillageIntro";
import ScenicAreas from "./pages/ScenicAreas";
import Jobs from "./pages/Jobs";
import Contact from "./pages/Contact";
import Suggestions from "./pages/Suggestions";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/village-intro" element={<VillageIntro />} />
          <Route path="/scenic-areas" element={<ScenicAreas />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/suggestions" element={<Suggestions />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
