import React from "react";

const Form = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            name="city"
            autoComplete="off"
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            name="country"
            autoComplete="off"
          />
        </div>

        <div className="col-md-3">
          <button className="btn btn-warning">Get Weather</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
