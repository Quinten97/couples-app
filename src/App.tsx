import { Outlet } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import "./styles.css";
import { AuthenticationProvider } from "./Providors/AuthProvidor";
// import user from "./mock.json";
import Home from "./routes/Home";
import Authenticate from "./routes/Authenticate";
import { useAuthState } from "react-firebase-hooks/auth";
import { FC } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBpmoT1ZGfrUxEl1k6aQsu4nX_zeribnvs",
  authDomain: "couples-app-4a951.firebaseapp.com",
  projectId: "couples-app-4a951",
  storageBucket: "couples-app-4a951.appspot.com",
  messagingSenderId: "26244717248",
  appId: "1:26244717248:web:3da52042a10adc17e0eb25",
  measurementId: "G-2XXEYJ1X1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default function App() {
  const [userToken] = useAuthState(auth);
  const IndexPage: FC = () => {
    return userToken ? <Home /> : <Authenticate />;
  };
  return (
    <AuthenticationProvider value={auth}>
      <div className="App">
        <h1>instagram</h1>
        <IndexPage />
      </div>
    </AuthenticationProvider>
  );
}
