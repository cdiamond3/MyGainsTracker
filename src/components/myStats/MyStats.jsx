import "./myStats.css";
import Calendar from "react-calendar";
import { useState } from "react";
import Charts from "../charts/Charts";

export default function Mystats() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="myStatsContainer">
      <div className="leftArea">
        <h3> My Schedule </h3>
        <Calendar className="calander" onChange={onChange} value={value} />
      </div>
      <div className="centerArea">
        <Charts />
      </div>
      <div className="rightArea">
          <h3> My Goals </h3>
        <div className="infoContainer">
        </div>
      </div>
    </div>
  );
}
