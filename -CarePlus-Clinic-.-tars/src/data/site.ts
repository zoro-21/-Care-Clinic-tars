import {
  Activity,
  Baby,
  Brain,
  HeartPulse,
  Microscope,
  Smile,
  Sparkles,
  Stethoscope,
} from 'lucide-react';

export const services = [
  {
    title: 'General Medicine',
    description: 'Primary care, preventive checkups, chronic care, and urgent consultations.',
    icon: Stethoscope,
  },
  {
    title: 'Dental',
    description: 'Cleanings, fillings, cosmetic dentistry, aligner guidance, and oral surgery.',
    icon: Smile,
  },
  {
    title: 'Physiotherapy',
    description: 'Evidence-based rehab plans for pain, mobility, sports injuries, and recovery.',
    icon: Activity,
  },
  {
    title: 'Diagnostics',
    description: 'Blood tests, imaging coordination, ECG, and preventive health packages.',
    icon: Microscope,
  },
  {
    title: 'Dermatology',
    description: 'Acne, pigmentation, allergies, hair loss, cosmetic procedures, and mole checks.',
    icon: Sparkles,
  },
  {
    title: "Women's Health",
    description: 'Gynecology, reproductive health, prenatal care, PCOS, and menopause support.',
    icon: HeartPulse,
  },
  {
    title: 'Pediatrics',
    description: 'Newborn care, vaccinations, growth tracking, nutrition, and acute illness care.',
    icon: Baby,
  },
  {
    title: 'Mental Health',
    description: 'Confidential counseling, stress care, psychiatry referrals, and wellness plans.',
    icon: Brain,
  },
];

export const doctors = [
  {
    name: 'Dr. Ananya Rao',
    role: 'Family Physician',
    experience: '12 years',
    specialty: 'Preventive care, diabetes, hypertension',
    bio: 'Compassionate primary care for families and working professionals.',
  },
  {
    name: 'Dr. Kabir Mehta',
    role: 'Dental Surgeon',
    experience: '10 years',
    specialty: 'Cosmetic dentistry, root canals',
    bio: 'Known for gentle dental procedures and smile design.',
  },
  {
    name: 'Dr. Nisha Varma',
    role: 'Dermatologist',
    experience: '9 years',
    specialty: 'Acne, hair, clinical dermatology',
    bio: 'Combines medical dermatology with patient-friendly treatment plans.',
  },
  {
    name: 'Dr. Arjun Nair',
    role: 'Physiotherapist',
    experience: '11 years',
    specialty: 'Sports rehab, spine care',
    bio: 'Builds measurable recovery programs for pain-free movement.',
  },
  {
    name: 'Dr. Priya Shah',
    role: 'Pediatrician',
    experience: '14 years',
    specialty: 'Vaccines, child development',
    bio: 'Trusted by parents for calm, practical child healthcare.',
  },
  {
    name: 'Dr. Sara Thomas',
    role: 'Mental Health Clinician',
    experience: '8 years',
    specialty: 'Anxiety, burnout, counseling',
    bio: 'Provides confidential, inclusive emotional wellness support.',
  },
];

export const locations = [
  { name: 'Indiranagar', address: '12 CMH Road, Indiranagar, Bengaluru', hours: 'Mon-Sat 8 AM-8 PM' },
  { name: 'Whitefield', address: '88 ITPL Main Road, Whitefield, Bengaluru', hours: 'Mon-Sun 7 AM-9 PM' },
  { name: 'HSR Layout', address: '27 17th Cross, Sector 3, HSR Layout, Bengaluru', hours: 'Mon-Sat 8 AM-8 PM' },
];

const questions = [
  'How do I book an appointment?',
  'Do you accept walk-ins?',
  'What insurance documents should I bring?',
  'Can I reschedule online?',
  'How do prescription refills work?',
  'When are lab reports available?',
  'Do you offer teleconsultations?',
  'What should new patients bring?',
];

export const faqs = Array.from({ length: 40 }, (_, index) => ({
  question: `${questions[index % questions.length]} (${index + 1})`,
  answer:
    'CarePlus Clinic supports online booking, phone assistance, and front-desk help. Bring a valid ID, prior prescriptions, relevant reports, and insurance details when applicable. Urgent symptoms should be evaluated immediately.',
}));

export const stats = [
  { value: '25k+', label: 'Patients cared for' },
  { value: '40+', label: 'Clinical experts' },
  { value: '3', label: 'Bengaluru clinics' },
  { value: '4.9/5', label: 'Patient rating' },
];

export const demoLeads = [
  { name: 'Rahul Sharma', service: 'Dental', date: 'Tomorrow', time: '10:00 AM', temperature: 'Hot' },
  { name: 'Anita Singh', service: 'General Medicine', date: 'Friday', time: '3:00 PM', temperature: 'Warm' },
  { name: 'Meera Iyer', service: 'Dermatology', date: 'Monday', time: '11:30 AM', temperature: 'Cold' },
] as const;
