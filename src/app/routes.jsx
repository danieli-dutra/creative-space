import { Routes, Route } from "react-router-dom";

import Header from "@/components/navigation/Header";

import Hero from "@/sections/Hero/Hero";
import Repertorio from "@/sections/Repertorio/Repertorio";
import Galeria from "@/sections/Galeria/Galeria";
import OQueMeMove from "@/sections/OQueMeMove/OQueMeMove";
import OQueConstruo from "@/sections/OQueConstruo/OQueConstruo";
import ComoConstruo from "@/sections/ComoConstruo/ComoConstruo";
import ParaOndeQueroIr from "@/sections/ParaOndeQueroIr/ParaOndeQueroIr";

function Home() {
  return (
    <>
      <Header />

      <Hero />
      <Repertorio />
      <Galeria />
      <OQueMeMove />
      <OQueConstruo />
      <ComoConstruo />
      <ParaOndeQueroIr />
    </>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;