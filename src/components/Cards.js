import React from "react";
import { useWeather } from "../context/WeatherContext";

const Cards = () => {
  const [nextWeather, currentWeatherData] = useWeather();

  //Gelen 3 saatlik verilerden saati 12 olan verileri filtreler
  const fiveDayData = nextWeather.filter((item) => {
    const date = new Date(item.dt_txt);
    return date.getHours() === 12;
  });

  //Haftanın günleri
  const daysOfWeek = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  return (
    <>
      <div className="px-3 md:lg:xl:px-40 border-t border-b py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 mt-5">
          {currentWeatherData ? (
            fiveDayData.map((item, key) => (
              <div
                key={key}
                className="bg-gray-200 font-sans flex flex-row justify-center items-center"
              >
                <div className="card p-3 w-full mx-auto bg-white shadow-xl hover:shadow">
                  <div className="text-center">
                    <img
                      src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                      alt="Hava Durumu"
                      className="shadow-md bg-slate-500 rounded-full align-middle inline mr-auto border-none max-w-[90px]"
                    />
                    <p className="text-center mt-2 text-1xl font-medium">
                      {item.dt_txt.slice(8, 10) +
                        " " +
                        item.dt_txt.slice(5, 7) +
                        " " +
                        item.dt_txt.slice(0, 4)}
                    </p>
                    <p className="text-center text-1xl font-medium">
                      {daysOfWeek[new Date(item.dt_txt).getDay()]}
                    </p>
                    <div className="text-center p-2 mt-2 text-1xl font-medium">
                      Sıcaklık {parseInt(item.main.temp)} &deg; C
                    </div>
                    <div className="text-center p-2  text-sm">
                      {item.weather[0].description} <br />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Hava durumu verileri yükleniyor...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Cards;
