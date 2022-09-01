import React from "react";
import { Link } from "react-router-dom";

export default function TravelDiary() {
  return (
    <div className="container m-5">
      <div className="row">
        <div className="col-md-6 mt-5 py-5 d-flex justify-content-between">
          <h1>Welcome to Kakana</h1>
          <div>
            <Link to="/add" className="btn btn-outline-dark mt-2">
              Add Entry
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
