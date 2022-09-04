import { Outlet } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>instagram</h1>
      <Outlet />
    </div>
  );
}
