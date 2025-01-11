import React, { useState, useEffect } from "react";

import Pagination from "./Pagination";

import "./TableContent.css";

const data = {
  schedule: [
    {
      id: 1,
      dateAndTime: "2023-12-27 11:00",
      status: "Запланировано",
      module:
        "Ультразвуковое исследование органов брюшной полости и забрюшинного пространства",
      sessionType: "Урок",
      room: "101",
      group: "A",
    },
    {
      id: 2,
      dateAndTime: "2023-12-27 12:00",
      status: "Запланировано",
      module:
        "Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы",
      sessionType: "Аккредитация",
      room: "202",
      group: "B",
    },
    {
      id: 3,
      dateAndTime: "2023-12-27 13:00",
      status: "Запланировано",
      module: "а",
      sessionType: "Аккредитация",
      room: "202",
      group: "B",
    },
    {
      id: 4,
      dateAndTime: "2023-12-27 14:00",
      status: "Идет",
      module: "б",
      sessionType: "Аккредитация",
      room: "202",
      group: "B",
    },
    {
      id: 5,
      dateAndTime: "2023-12-27 15:00",
      status: "Завершено",
      module: "в",
      sessionType: "Аккредитация",
      room: "202",
      group: "B",
    },
    {
      id: 6,
      dateAndTime: "2023-12-27 12:20",

      module: "г",
      sessionType: "Аккредитация",
      room: "202",
      group: "B",
    },
    {
      id: 7,
      dateAndTime: "2023-12-27 15:00",

      module: "д",
      sessionType: "Аккредитация",
      room: "202",
      group: "B",
    },
    {
      id: 8,
      dateAndTime: "2023-12-27 16:00",

      module: "е",
      sessionType: "Аккредитация",
      room: "202",
      group: "B",
    },
    {
      id: 9,
      dateAndTime: "2023-12-27 17:00",

      module: "ё",
      sessionType: "Аккредитация",
      room: "202",
      group: "B",
    },
    {
      id: 10,
      dateAndTime: "2023-12-27 18:00",

      module: "ж",
      sessionType: "Аккредитация",
      room: "202",
      group: "B",
    },
    {
      id: 11,
      dateAndTime: "2023-12-27 20:00",

      module: "з",
      sessionType: "Аккредитация",
      room: "202",
      group: "B",
    },
    {
      id: 12,
      dateAndTime: "2023-12-27 11:00",

      module: "к",
      sessionType: "Аккредитация",
      room: "202",
      group: "B",
    },
  ],
  sessions: [
    {
      id: 1,
      dateAndTime: "2023-12-28 10:00",

      module: "Акушерство и гинекология",
      sessionType: "Экзамен",
      room: "101",
      group: "C",
    },
    {
      id: 2,
      dateAndTime: "2023-12-28 14:00",

      module: "Модуль 4",
      sessionType: "Аккредитация",
      room: "202",
      group: "D",
    },
  ],
};

export default function TableContent({ activeMenu }) {
  const [sortedData, setSortedData] = useState(data[activeMenu]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const [sortDirection, setSortDirection] = useState("ascending");

  useEffect(() => {
    if (data[activeMenu]) {
      setSortedData(data[activeMenu]);
      setCurrentPage(1);
    } else {
      setSortedData([]);
    }
  }, [activeMenu]);

  const sortData = (column) => {
    // сортировка, пока только по unicode
    if (sortDirection === "ascending") {
      setSortedData(
        [...sortedData].sort((a, b) => (a[column] > b[column] ? 1 : -1))
      );
      setSortDirection("descending");
    } else {
      setSortedData(
        [...sortedData].sort((a, b) => (a[column] < b[column] ? 1 : -1))
      );
      setSortDirection("ascending");
    }
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    // поиск по названию модуля
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = data[activeMenu].filter((item) =>
      item.module.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSortedData(filtered);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="table-content">
      <div className="main-header">
        <h2>Учебные сессии</h2>
        <div className="main-header_rightside">
          <input
            type="text"
            placeholder="Поиск"
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <button className="create-btn">Создать</button>
        </div>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th
              onClick={() => sortData("dateAndTime")}
              className="sortable date"
            >
              Дата и время
            </th>
            <th onClick={() => sortData("status")} className="sortable status">
              Статус
            </th>
            <th onClick={() => sortData("module")} className="sortable module">
              Название учебного модуля
            </th>
            <th onClick={() => sortData("sessionType")} className="sortable">
              Тип сессии
            </th>
            <th onClick={() => sortData("room")} className="sortable room">
              Комната
            </th>
            <th onClick={() => sortData("group")} className="sortable">
              Группа
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.dateAndTime}</td>
              <td>{item.status}</td>
              <td>{item.module}</td>
              <td>{item.sessionType}</td>
              <td>{item.room}</td>
              <td>{item.group}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={sortedData.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
