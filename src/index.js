import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
      <App />
  </React.StrictMode>,
  document.getElementById("root")
)