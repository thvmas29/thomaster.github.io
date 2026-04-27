import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/index.css";
import { HashRouter } from "react-router-dom"; // Add this

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <App />
  </HashRouter>
);
