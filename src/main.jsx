import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import "./index.css";
import "@fontsource/inter"; // Fuente global (opcional)

// 🔧 Render principal — mantiene configuración previa
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#1F2937", // fondo oscuro coherente con QualiX
          color: "#F3F4F6",      // texto claro
          border: "1px solid #272C36",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          fontSize: "14px",
        },
        success: {
          iconTheme: { primary: "#84CC16", secondary: "#111827" }, // verde lima
        },
        error: {
          iconTheme: { primary: "#EF4444", secondary: "#111827" },
        },
      }}
    />
  </React.StrictMode>
);
