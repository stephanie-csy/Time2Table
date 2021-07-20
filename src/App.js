import React from "react"

import SignUpPage from "./SignUpPage"
import { AuthProvider } from "./AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import PageLogin from "./PageLogin"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"

import "./styles.css";


function App() {
  return (
    <div className="App">
      {/* <div style={{ maxWidth: "64rem", margin: "0 auto" }}> */}
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route path="/signup" component={SignUpPage} />
                <Route path="/login" component={PageLogin} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      // </div>
  );
}

export default App
