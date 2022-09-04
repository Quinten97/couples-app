import { FC } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
// import your route components too
import Authenticate from "./routes/Authenticate";
import Home from "./routes/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
const isAuthenicated: boolean = true;

const IndexPage: FC = () => {
  return isAuthenicated ? <Home /> : <Authenticate />;
};

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<IndexPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
