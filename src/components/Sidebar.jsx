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

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button onClick={() => setIsCollapsed(!isCollapsed)}>Свернуть</button>
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
    </div>
  );
}
