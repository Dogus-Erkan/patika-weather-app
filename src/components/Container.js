import "../App.css";
import { useWeather } from "../context/WeatherContext";
import Cards from "./Cards";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
const Container = () => {
  const [nextWeather, currentWeatherData, selectedCity] = useWeather();

  return (
    <div
      className="bg-blue-500 flex items-center justify-center md:lg:xl:h-screen py-10 md:lg:xl:!bg-contain sm:!bg-cover"
      style={{
        background:
          "url(https://img.freepik.com/free-vector/horizontal-seamless-pattern-with-clouds_1284-52895.jpg?w=1380&t=st=1681458735~exp=1681459335~hmac=77d4e0989eac7686fdf6f39fea2b3536b7eb41be78b65c131839956dcbb0b4aa)",
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
