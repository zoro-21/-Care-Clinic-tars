import { Calendar, Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import AiChatButton from './AiChatButton';
import AppointmentModal from './AppointmentModal';

const navItems = ['About', 'Services', 'Doctors', 'Locations', 'FAQ', 'Contact', 'Admin'];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode((value) => !value);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <header className="sticky top-0 z-40 border-b border-white/30 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
        <nav className="container-page flex h-20 items-center justify-between" aria-label="Primary">
          <Link to="/" className="text-2xl font-black text-teal-700 dark:text-teal-300">
            CarePlus Clinic
          </Link>

          <div className="hidden gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive ? 'font-semibold text-teal-600' : 'hover:text-teal-600'
                }
              >
                {item}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              aria-label="Toggle dark mode"
              onClick={toggleDarkMode}
              className="rounded-full p-3 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {darkMode ? <Sun /> : <Moon />}
            </button>
            <button onClick={() => setAppointmentOpen(true)} className="btn-primary flex items-center gap-2">
              <Calendar size={18} /> Book
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label="Open menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {menuOpen ? (
          <div className="container-page grid gap-4 pb-6 md:hidden">
            {navItems.map((item) => (
              <Link onClick={() => setMenuOpen(false)} key={item} to={`/${item.toLowerCase()}`}>
                {item}
              </Link>
            ))}
            <button onClick={() => setAppointmentOpen(true)} className="btn-primary">
              Book appointment
            </button>
          </div>
        ) : null}
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
      <AiChatButton />
      <AppointmentModal open={appointmentOpen} onClose={() => setAppointmentOpen(false)} />
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-20 bg-teal-950 py-12 text-teal-50">
      <div className="container-page grid gap-8 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-black">CarePlus Clinic</h2>
          <p className="mt-3 text-teal-100">Premium, accessible healthcare across Bengaluru.</p>
        </div>
        {['Care', 'Company', 'Support'].map((heading, index) => (
          <div key={heading}>
            <h3 className="font-bold">{heading}</h3>
            <p className="mt-3 text-sm text-teal-100">
              {index === 0
                ? 'General medicine, dental, diagnostics, pediatrics.'
                : index === 1
                  ? 'About, doctors, locations, careers.'
                  : 'FAQ, billing, reports, prescriptions.'}
            </p>
          </div>
        ))}
      </div>
    </footer>
  );
}
