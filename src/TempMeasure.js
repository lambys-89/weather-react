import React from "react";

export default function TempMeasure() {
  return (
    <div
      id="measure-select"
      className="btn-group btn-group-toggle"
      data-toggle="buttons"
    >
      <label
        id="cent-label"
        className="btn btn-secondary centigrade float-right active"
      >
        <input
          type="radio"
          name="options"
          className="measure float-right"
          id="centigrade-select"
          checked
        />{" "}
        °C
      </label>
      <label id="far-label" className="btn btn-secondary farenheit float-right">
        <input
          type="radio"
          name="options"
          className="measure float-right"
          id="farenheit-select"
        />{" "}
        °F
      </label>
    </div>
  );
}
