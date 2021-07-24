import React, { useContext, useState, useEffect } from "react"
// import db from "./config/firebase"
import { auth } from "./config/firebase"
import { db } from "./config/firebase"

export const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  // const user = auth.currentUser;

  function signup(name, email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
    .then((resp) => { return db.collection('users').doc(resp.user.email)
      .set({
        name: name,
        email: email,
        password: password,
        // uid: user,
        pendingSentFriendReqs: "",
        pendingReceivedFriendReqs: ""
      })
    }
    )
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}