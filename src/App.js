import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/home/home.component";
import AboutPage from "./pages/about/about.component";
import ServicesPage from "./pages/services/services.component";
import CareersPage from "./pages/careers/careers.component";
import LifePage from "./pages/life/life.component";

import Header from "./components/header/header.component";

const App = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/life" element={<LifePage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
