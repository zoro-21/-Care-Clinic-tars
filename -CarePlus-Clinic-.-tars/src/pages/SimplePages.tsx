import { useEffect, useState } from 'react';
import { demoLeads, faqs } from '../data/site';
import { getStoredLeads, MockLeadResponse } from '../services/salesforceMock';
import Home, { Doctors, Locations, Services } from './Home';

export const About = () => (
  <section className="container-page py-20">
    <p className="font-bold uppercase tracking-wide text-teal-600">About us</p>
    <h1 className="mt-2 text-5xl font-black">About CarePlus Clinic</h1>
    <p className="mt-6 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
      We are a patient-first, tech-enabled healthcare network focused on safe, accessible, and coordinated care with
      WCAG AA-friendly interfaces, transparent service journeys, and clinically reviewed content for AI-assisted support.
    </p>
  </section>
);

export const ServicesPage = () => <Services />;
export const DoctorsPage = () => <Doctors />;
export const LocationsPage = () => <Locations />;

export const FAQ = () => (
  <section className="container-page py-20">
    <p className="font-bold uppercase tracking-wide text-teal-600">Knowledge base</p>
    <h1 className="mt-2 text-5xl font-black">Frequently asked questions</h1>
    <div className="mt-8 space-y-3">
      {faqs.map((faq) => (
        <details className="card" key={faq.question}>
          <summary className="cursor-pointer font-bold">{faq.question}</summary>
          <p className="mt-2 text-slate-600 dark:text-slate-300">{faq.answer}</p>
        </details>
      ))}
    </div>
  </section>
);

export const Contact = () => (
  <section className="container-page py-20">
    <p className="font-bold uppercase tracking-wide text-teal-600">Contact</p>
    <h1 className="mt-2 text-5xl font-black">Contact CarePlus</h1>
    <form className="card mt-8 grid max-w-2xl gap-4">
      <input className="rounded-2xl border border-slate-200 p-3 dark:border-slate-700 dark:bg-slate-900" placeholder="Name" />
      <input className="rounded-2xl border border-slate-200 p-3 dark:border-slate-700 dark:bg-slate-900" placeholder="Email" />
      <textarea
        className="rounded-2xl border border-slate-200 p-3 dark:border-slate-700 dark:bg-slate-900"
        placeholder="How can we help?"
      />
      <button className="btn-primary">Send message</button>
    </form>
  </section>
);

export const Admin = () => {
  const [storedLeads, setStoredLeads] = useState<MockLeadResponse[]>([]);

  useEffect(() => {
    setStoredLeads(getStoredLeads());
  }, []);

  const hot = storedLeads.filter((lead) => lead.temperature === 'Hot').length || 6;
  const warm = storedLeads.filter((lead) => lead.temperature === 'Warm').length || 11;
  const cold = storedLeads.filter((lead) => lead.temperature === 'Cold').length || 8;

  return (
    <section className="container-page py-20">
      <p className="font-bold uppercase tracking-wide text-teal-600">Admin demo</p>
      <h1 className="mt-2 text-5xl font-black">Today&apos;s Leads</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Metric label="Hot" value={hot} emoji="🔥" />
        <Metric label="Warm" value={warm} emoji="🟡" />
        <Metric label="Cold" value={cold} emoji="❄️" />
      </div>
      <div className="card mt-8">
        <h2 className="text-2xl font-black">Latest Appointments</h2>
        <div className="mt-5 divide-y divide-slate-100 dark:divide-slate-800">
          {demoLeads.map((lead) => (
            <div className="grid gap-2 py-4 sm:grid-cols-4" key={`${lead.name}-${lead.time}`}>
              <strong>{lead.name}</strong>
              <span>{lead.service}</span>
              <span>{lead.date}</span>
              <span>{lead.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function Metric({ label, value, emoji }: { label: string; value: number; emoji: string }) {
  return (
    <div className="card">
      <p className="text-3xl">{emoji}</p>
      <p className="mt-2 text-4xl font-black text-teal-600">{value}</p>
      <p className="font-semibold">{label} leads</p>
    </div>
  );
}

export const NotFound = () => (
  <section className="container-page py-20">
    <h1 className="text-6xl font-black">404</h1>
    <p className="mt-4">This page is not available.</p>
  </section>
);

export { Home };
