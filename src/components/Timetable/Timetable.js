import React, { useState } from "react";
import Calendar from "react-calendar";

import "./Timetable.less";

export default function Timetable() {
    const [value, onChange] = useState(new Date());
  
    return (
      <div className="Sample">
        <header>
          <h1>Your Timetable</h1>
        </header>
        <div className="Sample__container">
          <main className="Sample__container__content">
            <Calendar
              onChange={onChange}
              showWeekNumbers
              value={value}
            />
          </main>
        </div>
      </div>
    );
  }