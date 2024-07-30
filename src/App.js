import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBarComponent from "./Components/NavBarComponent";
import Accueil from "./Pages/Accueil";

function App() {
  return <>
    <BrowserRouter>
      <NavBarComponent/>
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
    </BrowserRouter>
  
  </>;
}

export default App;
