import React from "react";

const Weather = props => {
  return (
    <div className="container">
      <div className="cards">
        <h1>
          {props.city}, {props.country}
        </h1>
        <h5 className="py-4">
          <i className={`wi ${props.weatherIcon} display-1`} />
        </h5>
        <h1 className="py-2">{props.celsius}&deg;</h1>

        {/** show max and min temp */}
        {minmaxTemp(props.temp_min, props.temp_max)}

        <h3 className="py-3">{props.description}</h3>
      </div>
    </div>
  );
};

const minmaxTemp = (min, max) => {
  return (
    <h3>
      <span className="px-4">{min}&deg;</span>
      <span className="px-4">{max}&deg;</span>
    </h3>
  );
};

export default Weather;
