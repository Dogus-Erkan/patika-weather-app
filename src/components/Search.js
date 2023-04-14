import cityList from "../json/city.json";
import { useWeather } from "../context/WeatherContext";
const Search = () => {
  // eslint-disable-next-line no-unused-vars
  const [nextWeather, currentWeatherData, selectedCity, setSelectedCity] =
    useWeather();

  //Seçilen şehri günceller
  const handleChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <>
      <h1 className="text-5xl font-bold text-center mb-8 text-blue-500 border-b-4 border-blue-500 py-2">
        Weather App
      </h1>
      <div className="flex justify-center mb-4">
        <select
          id="city-selector"
          defaultValue={selectedCity}
          onChange={handleChange}
          className="border-2 border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
        >
          <option disabled value="">--Şehir Seçiniz--</option>
          {Object.entries(cityList).map(([key, cityName]) => (
            <option key={key} value={cityName}>
              {cityName}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Search;
