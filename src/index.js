import React from "react";
import ReactDOM from "react-dom";

import Search from "./Search";
import SearchButtons from "./SearchButtons";
import TempMeasure from "./TempMeasure";
import WeatherList from "./WeatherList";

import "./styles.css";

function App() {
  return (
    <div className="container">
      <video
        className="background-vid"
        autoplay
        muted
        loop
        src="media/Placeholder - vid.mp4"
      />
      <div className="row v-align row1">
        <Search />
        <div className="col-sm">
          <SearchButtons />
        </div>
        <div id="temp-col" className="col-sm-2">
          <TempMeasure />
        </div>
      </div>
      <div className="row v-align2 row2">
        <div className="col-sm">
          <div className="row v-align2a row2a">
            <div className="col-sm">
              <h1 id="h1-city-name">London, UK</h1>
            </div>
          </div>
          <div className="row v-align2b row2b row-date-time">
            <div className="col-sm">
              <h2 className="date-time" id="current-date-time">
                00:00
              </h2>
            </div>
          </div>
          <div className="row v-align2c row2c">
            <div className="col-sm-3 weather-icon-current">
              <i id="current-weather-img" className="fas fa-cloud-sun-rain"></i>
            </div>
            <div className="col-sm weather-list">
              <WeatherList />
            </div>
          </div>
        </div>
      </div>

      <div className="row v-align3 row3">
        <div className="col-12">
          <h1 className="forecast-header">5 Day Forecast</h1>
        </div>
      </div>
      <div className="row row4">
        <div className="col-sm-12">
          <div className="card-group">
            <div className="card day1">
              <div className="card-body">
                <h5 id="day-1-title" className="card-title">
                  Monday
                </h5>
                <i id="day-1-img" className="fas fa-cloud-sun-rain"></i>
                <p id="day-1-max-min" className="card-text">
                  6°C/12°C
                </p>
              </div>
            </div>
            <div className="card day2">
              <div className="card-body">
                <h5 id="day-2-title" className="card-title">
                  Tuesday
                </h5>
                <i id="day-2-img" className="fas fa-cloud-sun-rain"></i>
                <p id="day-2-max-min" className="card-text">
                  9°C/16°C
                </p>
              </div>
            </div>
            <div className="card day3">
              <div className="card-body">
                <h5 id="day-3-title" className="card-title">
                  Wednesday
                </h5>
                <i id="day-3-img" className="fas fa-cloud-sun-rain"></i>
                <p id="day-3-max-min" className="card-text">
                  11°C/18°C
                </p>
              </div>
            </div>
            <div className="card day4">
              <div className="card-body">
                <h5 id="day-4-title" className="card-title">
                  Thursday
                </h5>
                <i id="day-4-img" className="fas fa-cloud-sun-rain"></i>
                <p id="day-4-max-min" className="card-text">
                  7°C/10°C
                </p>
              </div>
            </div>
            <div className="card day5">
              <div className="card-body">
                <h5 id="day-5-title" className="card-title">
                  Friday
                </h5>
                <i id="day-5-img" className="fas fa-cloud-sun-rain"></i>
                <p id="day-5-max-min" className="card-text">
                  4°C/7°C
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="open-source-code">
        <a href="https://github.com/lambys-89/shecodes-plus-project">
          Open-source code
        </a>{" "}
        by Sarah Lamb
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
