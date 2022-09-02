import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function EditEntry() {
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [budget, setBudget] = useState("");
  const [desc, setDesc] = useState("");

  const { id } = useParams();

  const entries = useSelector((state) => state);
  const currentEntry = entries.find((entry) => entry.id === parseInt(id));
  const dispatch = useDispatch();

  // Edit entries
  useEffect(() => {
    if (currentEntry) {
      setPlace(currentEntry.place);
      setDate(currentEntry.date);
      setBudget(currentEntry.budget);
      setDesc(currentEntry.desc);
    }
  }, [currentEntry]);

  // Go back to home page upon submit
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // check if data already exists
    const checkPlace = entries.find(
      (entry) => entry.id !== parseInt(id) && entry.place === place && place
    );

    const checkDate = entries.find(
      (entry) => entry.id !== parseInt(id) && entry.date === date && date
    );

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
      id: parseInt(id),
      place,
      date,
      budget,
      desc,
    };

    console.log(data);
    dispatch({ type: "UPDATE_ENTRY", payload: data });
    toast.success("Bucketlist Entry updated successfully!");
    navigate("/");
  };

  return (
    <div className="container p-5">
      {currentEntry ? (
        <>
          <div className="row p-5">
            <h1 className="fs-3 text-center pt-5 mb-3">
              Update Entry {parseInt(id) + 1}
            </h1>
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
                <div className="form-group d-flex justify-content-center mx-5 mb-5">
                  <input
                    type="submit"
                    value="Update"
                    className="btn btn-primary mx-2"
                  />
                  <Link to="/" className="btn btn-warning mx-2">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="text-center pt-5">This id does not exist</h1>
      )}
    </div>
  );
}
