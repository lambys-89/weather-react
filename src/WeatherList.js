import React from "react";

export default function weatherList() {
  return (
    <div>
      <ul className="list-group">
        <il className="weather-details temp">Currently:</il>
        <il className="weather-details feels">Feels like:</il>
        <il className="weather-details type">Type</il>
        <il className="weather-details hum">Humidity:</il>
        <il className="weather-details wind">Wind speed:</il>
      </ul>
    </div>
  );
}
