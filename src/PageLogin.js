// import { Button } from "@material-ui/core";
// import { FirebaseAuthConsumer } from "@react-firebase/auth";

// function PageLogin() {
//   const handleGoogleSignIn = (firebase) => {
//     const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(googleAuthProvider);
//     // firebase.firestore().collection("users")
//     // .doc(firebase.auth().currentUser.uid)
//     // .set({
//     // })
//   };

//   return (
//     <>
//       <h1>Login</h1>
//       <FirebaseAuthConsumer>
//         {({ firebase }) => (
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => handleGoogleSignIn(firebase)}
//           >
//             Sign in with Google
//           </Button>
//         )}
//       </FirebaseAuthConsumer>
//     </>
//   );
// }

// export default PageLogin;

import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "./AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}