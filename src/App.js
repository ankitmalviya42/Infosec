import "./App.css";
import React from "react";
// import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/footer/Footer";
import ContactUs from "./components/contact-us/ContactUs";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <ContactUs />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
