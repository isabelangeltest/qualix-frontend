import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaCogs,
  FaCode,
  FaFlask,
  FaCheckCircle,
  FaStar,
  FaSun,
  FaMoon,
} from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() => {
    // 🌗 Detectar tema preferido del sistema o guardado en localStorage
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme") === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // 🌓 Actualizar el tema al montar o cambiar
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.classList.add("theme-transition");
    localStorage.setItem("theme", darkMode ? "dark" : "light");

    const timer = setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 400);
    return () => clearTimeout(timer);
  }, [darkMode]);

  const links = [
    { to: "/", label: "Inicio", icon: <FaHome /> },
    { to: "/normas", label: "Normas", icon: <FaBook /> },
    { to: "/modelos", label: "Modelos", icon: <FaCogs /> },
    { to: "/codigo", label: "Código", icon: <FaCode /> },
    { to: "/pruebas", label: "Pruebas", icon: <FaFlask /> },
    { to: "/evaluacionWeb", label: "Evaluación Web", icon: <FaCheckCircle /> },
    { to: "/conclusiones", label: "Conclusiones", icon: <FaStar /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-bg/90 dark:bg-dark_bg/90 backdrop-blur border-b border-border dark:border-dark_border shadow-soft">
      <nav className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary dark:bg-dark_primary flex items-center justify-center text-bg dark:text-dark_bg font-bold shadow-md">
            Q
          </div>
          <span className="font-playfair text-2xl text-text dark:text-dark_text font-semibold tracking-wide">
            QualiX
          </span>
        </div>

        {/* LINKS */}
        <ul className="hidden md:flex items-center gap-6 text-textDim dark:text-dark_textDim text-sm">
          {links.map(({ to, label, icon }) => (
            <li key={to}>
              <Link
                to={to}
                className={`flex items-center gap-2 hover:text-primary dark:hover:text-dark_primary transition ${
                  location.pathname === to
                    ? "text-primary dark:text-dark_primary font-semibold"
                    : ""
                }`}
              >
                {icon} {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* BOTÓN DE TEMA */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="btn-ghost border border-border dark:border-dark_border text-lg p-2 rounded-full"
          aria-label="Cambiar tema"
        >
          {darkMode ? (
            <FaSun className="text-dark_primary" />
          ) : (
            <FaMoon className="text-primary" />
          )}
        </button>
      </nav>
    </header>
  );
}
