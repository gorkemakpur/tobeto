import Navi from "./components/Navbar/Navi";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Platform from "./pages/Platform/Platform";
import Catalog from "./pages/Catalog/Catalog";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import LoginNavi from "./components/Login/LoginNavi/LoginNavi";
import LoginFooter from "./components/Login/LoginFooter/LoginFooter";
import About from "./pages/About/About";
import Activity from "./pages/Activity/Activity";
import React from "react";

function App() {
  return (
<>
    <Routes>
        <Route path="/" element={
        <>
        <Navi />
        <HomePage />
        <Footer/>
        </>} 
        />

        <Route path="/platform" element={
          <>
          <Navi />
        <Platform />
        <Footer/>
        </>
        } 
        />


        <Route path="/login" element={
          <>
        <LoginNavi/>
        <Login />
        <LoginFooter/>
        </>
        } 
        />

        <Route path="/about" element={
          <>
        <LoginNavi/>
        <About />
        <LoginFooter/>
        </>
        } 
        />

        <Route path="/catalog" element={
          <>
        <LoginNavi/>
        <Catalog />
        <LoginFooter/>
        </>
        } 
        />

<Route path="/activity" element={
          <>
        <Activity />
        </>
        } 
        />
      </Routes>
      </>
  );
}

export default App;