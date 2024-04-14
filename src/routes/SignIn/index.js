import {
  // auth,
  signInWithGooglePopup,
  createUserFromAuth
  // signInWithGoogleRedirect,
} from "../../utils/firebase";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignUpForm from '../../components/SignUpForm';

const SignIn = () => {
  //   useEffect(() => {
  //     getUserData();
  //   }, [])

  //   const getUserData = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //         const userDocRef = await createUserFromAuth(response.user);
  //     }
  //   }

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
      {/*<button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button>*/}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
