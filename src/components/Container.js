import "../App.css";
import { useWeather } from "../context/WeatherContext";
import Cards from "./Cards";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import background from '../img/bg.jpg';
const Container = () => {
  const [nextWeather, currentWeatherData, selectedCity] = useWeather();

  return (
    <div
      className="bg-blue-500 flex items-center justify-center md:lg:xl:h-screen py-10 md:lg:xl:!bg-contain sm:!bg-cover"
      style={{
        background:
          `url(${background})`,
      }}
    >
      {
        // Apiden gelen veriler yüklendikten sonra gözükür
        currentWeatherData && nextWeather && selectedCity ? (
          <div className="bg-slate-50 p-10 rounded-md px-3 md:lg:xl:px-40 border-t border-b py-20 ">
            <Search />
            <CurrentWeather />
            <Cards />
          </div>
        ) : (
          // Apiden gelen veriler yüklenirken gözükür
          <div className="font-bold text-6xl">
            Hava durumu verileri yükleniyor...
          </div>
        )
      }
    </div>
  );
};

export default Container;
