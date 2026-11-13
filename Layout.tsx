
import { useState, type ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";

import {
  LayoutDashboard,
  Users,
  GitBranch,
  Contact,
  CheckSquare,
  Activity,
  ChartNoAxesCombined,
  Bell,
  Settings,
  Sun,
  Moon,
  Menu,
  X,
  Search,
  LogOut,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

const links: [string, string, LucideIcon][] = [
  ["Overview", "/", LayoutDashboard],
  ["Leads", "/leads", Users],
  ["Sales pipeline", "/pipeline", GitBranch],
  ["Customers", "/customers", Contact],
  ["Tasks", "/tasks", CheckSquare],
  ["Activities", "/activities", Activity],
  ["Reports", "/reports", ChartNoAxesCombined],
  ["Notifications", "/notifications", Bell],
];

interface LayoutProps {
  children: ReactNode;
  onTheme: () => void;
  theme: string;
  onLogout: () => void;
}

export default function Layout({
  children,
  onTheme,
  theme,
  onLogout,
}: LayoutProps) {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  const title =
    links.find((item) => item[1] === loc.pathname)?.[0] || "Workspace";

  return (
    <div className="app-shell">
      {/* Sidebar */}
      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark">o</div>

          <span>
            orbit<span className="brand-light">crm</span>
          </span>

          <button
            className="mobile-close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={19} />
          </button>
        </div>

        <div className="workspace-label">WORKSPACE</div>

        <nav>
          {links.map(([label, path, Icon]) => (
            <NavLink
              onClick={() => setOpen(false)}
              key={path}
              to={path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <Icon size={18} />

              <span>{label}</span>

              {label === "Notifications" && (
                <i className="nav-count">3</i>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Sidebar Bottom */}
        <div className="sidebar-bottom">
          <div className="upgrade-card">
            <div className="upgrade-icon">✦</div>

            <b>Make work flow</b>

            <p>Unlock more insights with Orbit Pro.</p>

            <button>
              Explore plans <span>↗</span>
            </button>
          </div>

          <NavLink
            to="/profile"
            onClick={() => setOpen(false)}
            className="nav-link"
          >
            <Settings size={18} />
            <span>Settings</span>
          </NavLink>

          <div className="user-mini">
            <div className="avatar">AM</div>

            <div className="user-meta">
              <b>Alex Morgan</b>
              <small>alex@company.com</small>
            </div>

            <button
              title="Log out"
              aria-label="Log out"
              onClick={onLogout}
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="mobile-overlay"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main Area */}
      <main className="main-area">
        {/* Header */}
        <header className="topbar">
          <div className="top-left">
            <button
              className="mobile-menu"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu />
            </button>

            <div className="breadcrumb">
              Workspace <span>/</span> <b>{title}</b>
            </div>
          </div>

          <div className="top-actions">
            <div className="searchbox">
              <Search size={16} />

              <input
                type="text"
                placeholder="Search anything..."
              />

              <kbd>⌘ K</kbd>
            </div>

            <button
              className="icon-btn"
              onClick={onTheme}
              title="Toggle theme"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon size={18} />
              ) : (
                <Sun size={18} />
              )}
            </button>

            <NavLink
              to="/notifications"
              className="icon-btn notification-btn"
              aria-label="Notifications"
            >
              <Bell size={18} />
              <i />
            </NavLink>

            <div className="top-avatar">AM</div>
          </div>
        </header>

        {/* Page Content */}
        <section className="page-content">
          {children}
        </section>

        {/* Footer */}
        <footer className="footer">
          © 2026 Orbit CRM
          <span>Built for better customer relationships</span>
        </footer>
      </main>
    </div>
  );
}
