import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand fixed-top navbar-dark bg-primary p-3">
      <Link to="/" className="navbar-brand mx-5 fs-3">
        Kakana Travel
      </Link>
    </nav>
  );
}
