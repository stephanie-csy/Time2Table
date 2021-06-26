import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

const API_KEY = "AIzaSyCYz3qO7GZBAX_U6Yj2S3QnF42mq0pKj-w";

let styles = {
  calendar: {
    borderWidth: "3px", 
  },
  
  today: css`
    color: red;
    border: 1px solid red;
  `
}

let calendars = [
  {calendarId: "en.singapore#holiday@group.v.calendar.google.com"}
];

class Schedule extends React.Component {
  render() {
    return (
      <div>
        <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
      </div>
    );
  }
}

export default Schedule;