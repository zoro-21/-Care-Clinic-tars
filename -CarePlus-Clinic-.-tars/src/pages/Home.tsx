import { motion } from 'framer-motion';
import { ArrowRight, MapPin, ShieldCheck } from 'lucide-react';
import { doctors, faqs, locations, services, stats } from '../data/site';

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50 py-24 dark:from-slate-950 dark:via-teal-950 dark:to-slate-900">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-[2rem] p-8">
            <p className="font-bold text-teal-600">Premium healthcare in Bengaluru</p>
            <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">
              Care that feels personal, modern, and trusted.
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
              CarePlus Clinic brings multi-specialty doctors, diagnostics, prescriptions, and AI-assisted appointment
              support into one seamless experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="btn-primary inline-flex items-center gap-2">
                Explore services <ArrowRight size={18} />
              </a>
              <a href="/faq" className="btn-secondary inline-flex items-center gap-2">
                <ShieldCheck size={18} /> View FAQ
              </a>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <motion.div whileHover={{ y: -6 }} className="card" key={stat.label}>
                <div className="text-4xl font-black text-teal-600">{stat.value}</div>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Services />
      <Doctors />
      <Testimonials />
      <Locations />
      <FAQPreview />
    </>
  );
}

export function Services() {
  return (
    <section id="services" className="container-page py-20">
      <p className="font-bold uppercase tracking-wide text-teal-600">Care services</p>
      <h2 className="mt-2 text-4xl font-black">Complete care services</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ title, description, icon: Icon }) => (
          <motion.article whileHover={{ y: -8 }} className="card" key={title}>
            <Icon className="text-teal-600" />
            <h3 className="mt-4 text-xl font-bold">{title}</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">{description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function Doctors() {
  return (
    <section className="container-page py-20">
      <p className="font-bold uppercase tracking-wide text-teal-600">Clinical team</p>
      <h2 className="mt-2 text-4xl font-black">Meet our doctors</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {doctors.map((doctor) => (
          <article className="card" key={doctor.name}>
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-teal-200 to-cyan-100" />
            <h3 className="mt-4 text-xl font-bold">{doctor.name}</h3>
            <p className="text-teal-600">
              {doctor.role} • {doctor.experience}
            </p>
            <p className="mt-2 font-medium">{doctor.specialty}</p>
            <p className="mt-2 text-slate-600 dark:text-slate-300">{doctor.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    'Clean clinic, punctual doctors, and excellent follow-up.',
    'The AI chat helped me book diagnostics in minutes.',
    'Kind pediatric care and transparent billing.',
  ];

  return (
    <section className="bg-white py-20 dark:bg-slate-900">
      <div className="container-page">
        <h2 className="text-4xl font-black">Patients recommend CarePlus</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote className="card" key={testimonial}>
              “{testimonial}”<footer className="mt-4 font-bold text-teal-600">Verified patient</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Locations() {
  return (
    <section className="container-page py-20">
      <p className="font-bold uppercase tracking-wide text-teal-600">Find us</p>
      <h2 className="mt-2 text-4xl font-black">Clinic locations</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {locations.map((location) => (
          <article className="card" key={location.name}>
            <MapPin className="text-teal-600" />
            <h3 className="mt-4 text-xl font-bold">{location.name}</h3>
            <p>{location.address}</p>
            <p className="text-sm text-slate-500">{location.hours}</p>
            <div className="mt-4 grid h-40 place-items-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-teal-950">
              Google Maps embed placeholder
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FAQPreview() {
  return (
    <section className="container-page py-20">
      <p className="font-bold uppercase tracking-wide text-teal-600">AI knowledge base</p>
      <h2 className="mt-2 text-4xl font-black">Healthcare FAQ knowledge base</h2>
      <div className="mt-6 space-y-3">
        {faqs.slice(0, 8).map((faq) => (
          <details className="card" key={faq.question}>
            <summary className="cursor-pointer font-bold">{faq.question}</summary>
            <p className="mt-2 text-slate-600 dark:text-slate-300">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
