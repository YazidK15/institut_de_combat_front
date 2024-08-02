import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBarComponent from "./Components/NavBarComponent";
import Accueil from "./Pages/Accueil";
import FooterComponent from "./Components/FooterComponent";
import LegalDetailsPage from "./Pages/LegalDetailsPage";
import Disciplines from "./Pages/Disciplines";
import Coach from "./Pages/Coach";

function App() {
  return <>
    <BrowserRouter>
      <NavBarComponent/>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/disciplines" element={<Disciplines />} />
        <Route path="/coach" element={<Coach />} />
        <Route path="/legal" element={<LegalDetailsPage />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  
  </>;
}

export default App;
