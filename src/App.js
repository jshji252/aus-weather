import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main";
function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch("/api/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <div>
        {!currentTime && <p>Waiting...</p>}
        <p>The current time is {currentTime}.</p>
        <p>This is an updated version.</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
