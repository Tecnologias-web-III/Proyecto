import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./css/variables.css";
import "./css/auth.css";
import "./css/forms.css";
import "./css/compatibility.css";
import "./css/base.css";
import "./css/navbar.css";
import "./css/dashboard.css";
import "./css/about.css";
import "./css/footer.css";
import "./css/profile.css";
import "./css/admin.css";
import "./css/responsive.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
