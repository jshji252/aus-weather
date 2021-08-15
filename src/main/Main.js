import React, { useState } from "react";
import styles from "./Main.module.css";
import Chart from "./Chart";
export default function Main({ loading, setLoading }) {
  const [weatherData, setWeatherData] = useState([{}]); // Cacheing purpose
  const [currentCityData, setCurrentCityData] = useState([]);
  const [city, setCity] = useState(null);
  const [err, setErr] = useState(false);
  const fetchCity = (city) => {
    setCity(city);
    if (!weatherData[0][city.name]) {
      setLoading(true);
      fetch(`/api?name=${city.name}&&api_address=${city.api_address}`)
        .then((res) => res.json())
        .then((data) => {
          if (!data.error) {
            setCurrentCityData(data);
            let newWeatherData = [...weatherData];
            newWeatherData[0][city.name] = data;
            setWeatherData(newWeatherData);
            setErr(false);
          } else {
            setErr(true);
          }

          setLoading(false);
        });
    } else {
      setCurrentCityData(weatherData[0][city.name]);
      setErr(false);
    }
  };

  const cities = [
    {
      name: "Brisbane",
      api_address: "http://reg.bom.gov.au/fwo/IDQ60901/IDQ60901.94576.json",
    },
    {
      name: "Darwin",
      api_address: "http://reg.bom.gov.au/fwo/IDD60901/IDD60901.95122.json",
    },
    {
      name: "Perth",
      api_address: "http://reg.bom.gov.au/fwo/IDW60901/IDW60901.94608.json",
    },
    {
      name: "Adelaide",
      api_address: "http://reg.bom.gov.au/fwo/IDS60901/IDS60901.94648.json",
    },
    {
      name: "Antarctica",
      api_address: "http://www.bom.gov.au/fwo/IDT60803/IDaaT60803.89571.json",
    },
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainTop}>
        <span className={styles.mainSpan}>Choose your favourite city!</span>
        <div className={styles.buttons}>
          {cities.map((city) => {
            return (
              <button
                className={styles.mainButton}
                onClick={() => fetchCity(city)}
              >
                {city.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.chart}>
        <div className={styles.chartTitle}>
          {city
            ? `Temperature of ${city.name} in the last 72 hours`
            : "choose choose!"}
        </div>
        {err || loading ? (
          <div className={styles.loading}>
            {err &&
              "Ooops! There was an error. Try again or choose another city!"}
          </div>
        ) : (
          <Chart data={currentCityData} />
        )}
      </div>
      <div className={styles.copyright}>
        Copyright Commonwealth of Australia 2021, Bureau of Meteorology. For
        more information see:{" "}
        <a href="http://www.bom.gov.au/other/copyright.shtml">copyright</a> and{" "}
        <a href="http://www.bom.gov.au/other/disclaimer.shtml">disclaimer</a>
      </div>
    </div>
  );
}
