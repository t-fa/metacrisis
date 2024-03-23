"use server";

import { fetchWeatherApi } from "openmeteo";

const params = {
  latitude: [52.54],
  longitude: [13.41],
  current: "temperature_2m,weather_code,wind_speed_10m,wind_direction_10m",
  hourly: "temperature_2m,precipitation",
  daily: "weather_code,temperature_2m_max,temperature_2m_min",
};

export const getOpenMeteo = async () => {
  const url = "https://api.open-meteo.com/v1/forecast";
  const res = await fetchWeatherApi(url, params);

  return res;
};
