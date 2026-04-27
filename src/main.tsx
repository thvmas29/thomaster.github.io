import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/index.css";
import { HashRouter } from "react-router"; 

const container = document.getElementById("root");

if (!container) {
  throw new Error("Failed to find the root element. Check your index.html");
}

const root = createRoot(container);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
