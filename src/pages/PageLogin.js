import { Button } from "@material-ui/core";
import { FirebaseAuthConsumer } from "@react-firebase/auth";

function PageLogin() {
  const handleGoogleSignIn = (firebase) => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider);
    // firebase.firestore().collection("users")
    // .doc(firebase.auth().currentUser.uid)
    // .set({
    // })
  };

  return (
    <>
      <h1>Login</h1>
      <FirebaseAuthConsumer>
        {({ firebase }) => (
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleGoogleSignIn(firebase)}
          >
            Sign in with Google
          </Button>
        )}
      </FirebaseAuthConsumer>
    </>
  );
}

export default PageLogin;
