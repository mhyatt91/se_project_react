import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const weatherOption = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  const weatherOptionUrl =
    weatherOption[0]?.url ||
    defaultWeatherOptions[weatherData.isDay ? "day" : "night"]?.url;

  return (
    <section className="weather-card__info">
      <p className="weather-card__temp">
        {weatherData.temp[currentTemperatureUnit]}°{currentTemperatureUnit}
      </p>
      <img
        src={weatherOptionUrl}
        alt={`${weatherData.isDay ? "Daytime" : "Nighttime"} ${weatherData.condition} weather`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
