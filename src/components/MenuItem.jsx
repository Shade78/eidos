import React from "react";
import "./MenuItem.css";

export default function MenuItem({ label, onClick, isCollapsed }) {
  return (
    <li
      onClick={onClick}
      className={`menu-item ${isCollapsed ? "collapsed" : ""}`}
    >
      {label}
    </li>
  );
}
