import React, { useEffect, useState } from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";
import Box from "../Box";

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

function Cal(props) {
  const [calID, setCalID] = useState("Loading calendar...");
  useEffect(() => {
    const savedCalID = window.localStorage.getItem("calendarID");
    setCalID(savedCalID ?? "en.singapore#holiday@group.v.calendar.google.com");
    
    
  }, []);
  if(calID === "en.singapore#holiday@group.v.calendar.google.com") {
    return (
  
      <Box>
        <h4>
          Enter your calendar ID
        </h4>
        <strong
          role="button"
          onClick={() => {
            const newCalID = prompt("Enter your calendar ID", calID);
            setCalID(newCalID);
            window.localStorage.setItem("calendarId", newCalID);
          }}
        >
          {"Calendar set as: " + calID || "<set a calendar>"}
          
        </strong>
        
        <Calendar apiKey={API_KEY} calendars={[{calendarId: calID}]} styles={styles} />
      </Box>
    );
  }
  else {
    return (
      <Calendar apiKey={API_KEY} calendars={[{calendarId: calID}]} styles={styles} />
    );
  }
}

class Schedule extends React.Component {
  render() {
    return (
      <Cal />
    );
  }
}

export default Schedule;