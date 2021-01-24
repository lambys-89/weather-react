import React from "react";

export default function SearchButtons() {
  return (
    <div>
      <button
        type="submit"
        className="btn btn-primary loc-search search"
        id="curr-location"
      >
        <i className="fas fa-location-arrow"></i>
      </button>
      <button type="submit" className="btn btn-primary search" id="city-search">
        Search
      </button>
    </div>
  );
}
