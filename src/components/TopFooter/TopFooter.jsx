// src/components/TopFooter/TopFooter.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./TopFooter.css";

const TopFooter = () => {
  return (
    <div className="top-footer">
      <span>Call us: +1 (555) 123-4567</span>
      <div className="top-footer-links">
        <Link to="/contact">Contact</Link>
        <Link to="/about">About Us</Link>
        <Link to="/team">Team</Link>
      </div>
    </div>
  );
};

export default TopFooter;
