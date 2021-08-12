import React, { useState } from "react";
import styles from "./App.module.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main";

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <div className={styles.container}>
      <Header />
      <Main loading={loading} setLoading={setLoading} />
      <Footer />
      {loading && <div className={styles.loading}>Loading...</div>}
    </div>
  );
}

export default App;
