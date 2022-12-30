import React, { useState, useEffect } from "react";
import HeroSection from "./components/hero/HeroSection";
import Loader from "./components/loader/Loader";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 300);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="app">
          <Navbar />
          <HeroSection />
        </div>
      )}
    </>
  );
}

export default App;
