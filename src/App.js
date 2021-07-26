import React from "react"
import SignUpPage from "./SignUpPage"
import { AuthProvider } from "./AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import PageLogin from "./PageLogin"
import ForgotPassword from "./ForgotPassword"
import PrivateRoute from "./PrivateRoute"

// import UsersProfile from "./pages/UsersProfile"

// import { auth } from "./config/firebase"

// import ForgotPassword from "./ForgotPassword"

// import "./styles.css";

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
                {/* <Route exact path={`/profile/${auth.currentUser.email}`} component={UsersProfile} /> */}
              </Switch>
            </AuthProvider>
          </Router>
        </div>
  );
}

export default App
