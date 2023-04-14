import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [nextWeather, setnextWeather] = useState();
  const [currentWeatherData, setCurrentWeatherData] = useState();
  const [selectedCity, setSelectedCity] = useState();

  const values = [
    nextWeather,
    currentWeatherData,
    selectedCity,
    setSelectedCity,
  ];

  
  const units = "metric";
  const lang = "tr";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        // Konum bilgileri başarıyla alındı
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        await axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
          )

          .then((response) => {
            // Şehir ismi başarıyla alındı
            const city = response.data.name;
            setSelectedCity(city);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      (error) => {
        // Konum izni alınmazsa default olarak değer ata
        console.log(error);
        setSelectedCity("İSTANBUL");
      }
    );
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const next = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity},tr&units=${units}&lang=${lang}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
        );
        const current = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity},tr&units=${units}&lang=${lang}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
        );
        setnextWeather(next.data.list);
        setCurrentWeatherData(current.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [selectedCity]);

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
