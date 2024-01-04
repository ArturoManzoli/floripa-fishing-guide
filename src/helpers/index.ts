export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const formatTime = (date: Date) => {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

export const moonPhases = [
  "New Moon",
  "Waxing Crescent",
  "First Quarter",
  "Waxing Gibbous",
  "Full Moon",
  "Waning Gibbous",
  "Last Quarter",
  "Waning Crescent",
];

export const weatherConditions = [
  "Sunny",
  "Partly Cloudy",
  "Scattered Clouds",
  "Cloudy",
  "Overcast",
  "Windy",
  "Rainy",
  "Stormy",
  "Snowy",
  "Foggy",
];

export const windDirections = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

export const tideStates = ["Low", "Rising", "High", "Falling"];
