export const signIn = (Ref) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(Ref.emailRef, Ref.passwordRef)
      .then(() => {
        dispatch({ type: "SIGN_IN" });
      })
      .catch((err) => {
        dispatch({ type: "SIGN_IN_ERR" }, err);
      });
  };
};

export const logOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGN_OUT" });
      });
  };
};

export const signUp = (Ref) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .createUserWithEmailAndPassword(Ref.emailRef, Ref.passwordRef)
      .then(() => {
        const user = firebase.auth().currentUser;
        user.sendEmailVerification();
        dispatch({ type: "SIGN_UP" });
      })
      .catch((err) => {
        dispatch({ type: "SIGN_UP_ERR" }, err);
      });
  };
};

export const resetPassword = (emailRef) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const user = firebase.auth();
    user
      .sendPasswordResetEmail(emailRef)
      .then(() => {
        dispatch({ type: "RESET_PASSWORD" });
      })
      .catch((error) => {
        dispatch({ type: "RESET_PASSWORD_ERR" });
      });
  };
};

export const reSendVerificationEmail = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const user = firebase.auth().currentUser;
    user
      .sendEmailVerification()
      .then(() => {
        dispatch({ type: "RE_SEND_VERIFICATION_EMAIL" });
      })
      .catch((error) => {
        dispatch({ type: "RE_SEND_VERIFICATION_EMAIL_ERR" });
      });
  };
};
