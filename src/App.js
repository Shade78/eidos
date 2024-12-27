import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TableContent from "./components/TableContent";
import "./App.css";

function App() {
  const [activeMenu, setActiveMenu] = useState("schedule");

  return (
    <div className="App">
      <Sidebar setActiveMenu={setActiveMenu} />
      <TableContent activeMenu={activeMenu} />
    </div>
  );
}

export default App;
