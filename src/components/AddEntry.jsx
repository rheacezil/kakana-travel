import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AddEntry() {
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [budget, setBudget] = useState("");
  const [desc, setDesc] = useState("");

  const entries = useSelector((state) => state);
  const dispatch = useDispatch();

  // Go back to home page upon submit
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // check if data already exists
    const checkPlace = entries.find(
      (entries) => entries.place === place && place
    );

    const checkDate = entries.find((entries) => entries.date === date && date);

    // All fields must be filled
    if (!place || !date || !budget || !desc) {
      return toast.warning("Please fill in all fields!");
    }

    // errors if values already exist
    if (checkPlace) {
      return toast.error("You already created a plan to go to this place.");
    }

    if (checkDate) {
      return toast.error("You already have a trip planned on this date.");
    }

    const data = {
      id: entries[entries.length - 1].id + 1,
      place,
      date,
      budget,
      desc,
    };

    console.log(data);
    dispatch({ type: "ADD_ENTRY", payload: data });
    toast.success("Bucketlist Entry added successfully!");
    navigate("/");
  };

  return (
    <div className="container p-5">
      <div className="row p-5">
        <h1 className="fs-3 text-center pt-5 mb-3">Add Entry</h1>
        <div className="col-md-6 shadow mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="form-group mx-5 mt-5 mb-3">
              <label className="form-label">Where to go?</label>
              <input
                className="form-control"
                type="text"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
              />
            </div>
            <div className="form-group mx-5 mb-3">
              <label className="form-label">Date</label>
              <input
                className="form-control"
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-group mx-5 mb-3">
              <label className="form-label">Goal Budget</label>
              <input
                type="number"
                className="form-control"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </div>
            <div className="form-group mx-5 mb-3">
              <label className="form-label">Tell us about it!</label>
              <textarea
                className="form-control"
                rows={5}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group d-grid mx-5 mb-5">
              <input
                type="submit"
                value="Add Entry"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
