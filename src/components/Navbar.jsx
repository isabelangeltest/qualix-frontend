import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  BookOpen,
  Layers,
  ClipboardCheck,
  Code2,
  Target,
  FileText,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";

export default function Navbar({ darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Inicio", icon: <Home size={18} /> },
    { to: "/normas", label: "Normas", icon: <BookOpen size={18} /> },
    { to: "/modelos", label: "Modelos", icon: <Layers size={18} /> },
    { to: "/estandares", label: "Estándares", icon: <ClipboardCheck size={18} /> },
    { to: "/codigo", label: "Código", icon: <Code2 size={18} /> },
    { to: "/pruebas", label: "Pruebas", icon: <Target size={18} /> },
    { to: "/evaluacionweb", label: "Evaluación", icon: <FileText size={18} /> },
    // ✅ nuevo
    { to: "/conclusiones", label: "Conclusiones", icon: <CheckCircle size={18} /> },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-border dark:border-dark_border bg-bg/80 dark:bg-dark_bg/80 text-text dark:text-dark_text shadow-soft transition-all duration-300">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* 🔹 Logo original restaurado */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary dark:bg-dark_primary flex items-center justify-center text-bg dark:text-dark_bg font-bold shadow-md">
            Q
          </div>
          <span className="font-playfair text-2xl font-bold tracking-wide text-primary dark:text-dark_primary">
            QualiX
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6 text-textDim dark:text-dark_textDim">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`flex items-center gap-1 transition ${
                  location.pathname === item.to
                    ? "text-primary dark:text-dark_primary font-semibold"
                    : "hover:opacity-75"
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
          <button
            onClick={toggleTheme}
            className={`btn-ghost border border-border dark:border-dark_border text-sm px-3 py-1 rounded-full transition ${
              darkMode
                ? "bg-dark_primary text-yellow-400 hover:bg-dark_primary/80"
                : "bg-primary text-white hover:bg-primary/80"
            }`}
            aria-label="Cambiar tema"
            title="Cambiar tema"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </ul>

        {/* Mobile toggles */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition ${
              darkMode
                ? "bg-dark_primary text-yellow-400 hover:bg-dark_primary/80"
                : "bg-primary text-white hover:bg-primary/80"
            }`}
            aria-label="Cambiar tema"
            title="Cambiar tema"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="p-2 text-xl"
            aria-label="Abrir menú"
            title="Menú"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu con scroll vertical */}
      {menuOpen && (
        <div className="md:hidden bg-bg dark:bg-dark_bg border-t border-border dark:border-dark_border">
          <ul className="flex flex-col space-y-1 p-4 max-h-[70vh] overflow-y-auto overscroll-contain">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-2 py-2 px-2 rounded transition ${
                    location.pathname === item.to
                      ? "text-primary dark:text-dark_primary font-semibold"
                      : "hover:opacity-80"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
