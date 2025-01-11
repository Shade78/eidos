import React, { useState } from "react";
import MenuItem from "./MenuItem";

import "./Sidebar.css";

export default function Sidebar({ setActiveMenu }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { label: "Расписание", key: "schedule" },
    { label: "Учебные сессии", key: "sessions" },
    { label: "Список комнат", key: "rooms" },
    { label: "Пользователи", key: "users" },
    { label: "Учебные группы", key: "groups" },
    { label: "Список устройств", key: "devices" },
    { label: "Настройки системы", key: "settings" },
    { label: "Архив", key: "archive" },
  ];

  const userName = "Иван Иванов";
  const userRole = "Преподаватель";
  const userInitials = userName
    .split(" ")
    .map((name) => name[0])
    .join("");

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <h2>Сим Центр</h2>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="toggle-btn"
        >
          <div className="toggle-icon">&lt;</div>
        </button>
      </div>
      <ul>
        {menuItems.map((item) => (
          <MenuItem
            key={item.key}
            label={item.label}
            onClick={() => setActiveMenu(item.key)}
            isCollapsed={isCollapsed}
          />
        ))}
      </ul>
      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">{userInitials}</div>
          <div className="user-name">{userName}</div>
          <div className="user-Role">{userRole}</div>
        </div>
      </div>
    </div>
  );
}
