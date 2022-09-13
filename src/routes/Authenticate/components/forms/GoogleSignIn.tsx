import { FC } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import GoogleButton from "react-google-button";
const provider = new GoogleAuthProvider();

const handleClick = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(credential, token, user);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(errorCode, errorMessage, email, credential);
    });
};
const GoogleButtonComponent: FC = () => {
  return (
    <div>
      <GoogleButton onClick={handleClick} />
    </div>
  );
};
export default GoogleButtonComponent;
