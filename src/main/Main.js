import React from "react";
import styles from "./Main.module.css";
export default function Main() {
  const cities = [
    {
      name: "brisbane",
      api_address: "http://reg.bom.gov.au/fwo/IDQ60901/IDQ60901.94576.json",
    },
    {
      name: "darwin",
      api_address: "http://reg.bom.gov.au/fwo/IDD60901/IDD60901.95122.json",
    },
    {
      name: "perth",
      api_address: "http://reg.bom.gov.au/fwo/IDW60901/IDW60901.94608.json",
    },
    {
      name: "adelaide",
      api_address: "http://reg.bom.gov.au/fwo/IDS60901/IDS60901.94648.json",
    },

    {
      name: "antarctica",
      api_address: "http://www.bom.gov.au/fwo/IDT60803/IDT60803.89571.json",
    },
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainTop}>
        <p>Get weather data from:</p>
        <div>
          {cities.map((city) => {
            return <button>{city.name}</button>;
          })}
        </div>
      </div>
    </div>
  );
}
