import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from "@material-ui/core/CssBaseline";
import { FirebaseAuthProvider } from "@react-firebase/auth"

import { firebase } from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";

import { config } from "./config/firebase";

import App from './App';

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <CssBaseline />
    <FirebaseAuthProvider {...config} firebase={firebase}>
      <App />
    </FirebaseAuthProvider>
  </StrictMode>,
  rootElement
);