import React from "react";
import { useWeather } from "../context/WeatherContext";

const CurrentWeather = () => {
  // eslint-disable-next-line no-unused-vars
  const [nextWeather, currentWeatherData, selectedCity] = useWeather();
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:mb-5 ">
      <div className="flex items-center mb-4 md:mb-0 md:min-w-[640px]">
        <img
          src={`https://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png`}
          alt="Hava Durumu"
          className="w-full h-full max-w-[200px] max-h-[200px] bg-orange-300  rounded-full"
        />
        <div className="flex flex-col ml-3 md:ml-5">
          <h1 className="sm:text-2xl md:text-4xl font-bold mb-8">
            {selectedCity}
          </h1>
          <span className="text-4xl font-bold">
            {parseInt(currentWeatherData.main.temp_max)} &#8451;
          </span>
          <span className="text-2xl ">
            {parseInt(currentWeatherData.main.temp_min)} &#8451;
          </span>
          <span className="text-2xl ">
            <span className="font-bold"> Hava: </span>
            {currentWeatherData.weather[0].description}
          </span>
          <span className="text-2xl ">
            <span className="font-bold"> Hissedilen: </span>
            {parseInt(currentWeatherData.main.feels_like)}
          </span>
        </div>
      </div>
      <div className="text-lg md:grid md:grid-cols-2 md:gap-4">
        <div className="bg-white rounded shadow-lg p-4 mt-4 md:mt-0 flex flex-wrap items-center content-center hover:shadow">
          <p>
            <img
              src={` https://cdn-icons-png.flaticon.com/512/728/728123.png`}
              alt="Hava Durumu"
              className="shadow-md  rounded-full align-middle inline mr-auto border-none max-w-[65px]"
            />
            <span className="font-bold p-2">Gün Doğumu:</span>{" "}
            {new Date(currentWeatherData.sys.sunrise * 1000).toLocaleString(
              [],
              { hour: "2-digit", minute: "2-digit" }
            )}
          </p>
        </div>
        <div className="bg-white rounded shadow-lg p-4 mt-4 md:mt-0 flex flex-wrap items-center content-center hover:shadow">
          <p>
            <img
              src={` https://cdn-icons-png.flaticon.com/512/728/728124.png`}
              alt="Hava Durumu"
              className="shadow-md  rounded-full align-middle inline mr-auto border-none max-w-[65px]"
            />
            <span className="font-bold p-2">Güneş Batış:</span>{" "}
            {new Date(currentWeatherData.sys.sunset * 1000).toLocaleString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        <div className="bg-white rounded shadow-lg p-4 mt-4 md:mt-0 flex flex-wrap items-center content-center hover:shadow">
          <p>
            <img
              src={`https://cdn-icons-png.flaticon.com/512/2529/2529971.png`}
              alt="Hava Durumu"
              className="shadow-md  rounded-full align-middle inline mr-auto border-none max-w-[65px]"
            />
            <span className="font-bold p-2">Rüzgar:</span>{" "}
            {currentWeatherData.wind.speed} km/s
          </p>
        </div>
        <div className="bg-white rounded shadow-lg p-4 mt-4 md:mt-0 flex flex-wrap items-center content-center hover:shadow">
          <p>
            <img
              src={`https://cdn-icons-png.flaticon.com/512/728/728093.png`}
              alt="Hava Durumu"
              className="shadow-md  rounded-full align-middle inline mr-auto border-none max-w-[65px]"
            />
            <span className="font-bold p-2">Nem:</span> %
            {currentWeatherData.main.humidity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
