import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function Home() {
  const entries = useSelector((state) => state);

  const dispatch = useDispatch();

  const deleteEntry = (id) => {
    dispatch({ type: "DELETE_ENTRY", payload: id });
    toast.success("Entry deleted successfully.");
  };

  return (
    <div className="container m-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 mt-5 py-5 d-flex justify-content-between">
          <h1>Tara travel!</h1>
          <div>
            <Link to="/add" className="btn btn-outline-primary btn-lg">
              Add Entry
            </Link>
          </div>
        </div>
        <div className="col-lg-10 mx-auto">
          <table className="table table-hover">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Place</th>
                <th scope="col">Date</th>
                <th scope="col">Budget Goal</th>
                <th scope="col">Trip Description</th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {entries.map((entry, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{entry.place}</td>
                  <td>{entry.date}</td>
                  <td>{entry.budget}</td>
                  <td>{entry.desc}</td>
                  <td>
                    <Link
                      to={`edit/${entry.id}`}
                      className="btn btn-sm btn-primary mx-2"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-sm btn-danger"
                      type="button"
                      onClick={() => deleteEntry(entry.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
