import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./shared/components/Navbar";
import DashboardPage from "./modules/dashboard/DashboardPage";
import AboutPage from "./modules/dashboard/AboutPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
