import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import {
  createFollowUpTask,
  createHealthcareLead,
  storeConversationTranscript,
} from '../services/salesforceMock';

type FormValues = {
  type: 'new' | 'existing';
  name: string;
  email: string;
  phone: string;
  clinic: string;
  date: string;
  time: string;
  service: string;
  request: string;
};

const inputClass = 'rounded-2xl border border-slate-200 p-3 dark:border-slate-700 dark:bg-slate-900';

export default function AppointmentModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitSuccessful, isSubmitting },
  } = useForm<FormValues>({ defaultValues: { type: 'new', clinic: 'Indiranagar' } });

  if (!open) return null;

  const patientType = watch('type');

  async function submit(data: FormValues) {
    const transcript = JSON.stringify(data, null, 2);
    const lead = await createHealthcareLead({
      name: data.name,
      email: data.email,
      phone: data.phone,
      clinic: data.clinic,
      service: data.service || data.request,
      transcript,
    });

    await createFollowUpTask(lead.leadId, lead.temperature);
    await storeConversationTranscript(lead.leadId, transcript);
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/60 p-4">
      <form onSubmit={handleSubmit(submit)} className="glass max-h-[90vh] w-full max-w-2xl overflow-auto rounded-3xl p-6">
        <div className="flex justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-teal-600">Appointment flow</p>
            <h2 className="text-2xl font-black">Book or manage appointment</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close appointment modal">
            <X />
          </button>
        </div>

        <fieldset className="mt-5 flex gap-5" aria-label="Patient type">
          <label className="flex items-center gap-2">
            <input type="radio" value="new" {...register('type')} /> New Patient
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" value="existing" {...register('type')} /> Existing Patient
          </label>
        </fieldset>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <input required className={inputClass} placeholder="Full name" {...register('name')} />
          <input required type="email" className={inputClass} placeholder="Email" {...register('email')} />
          <input required type="tel" className={inputClass} placeholder="Phone" {...register('phone')} />

          {patientType === 'new' ? (
            <>
              <select className={inputClass} {...register('clinic')}>
                <option>Indiranagar</option>
                <option>Whitefield</option>
                <option>HSR Layout</option>
              </select>
              <input required type="date" className={inputClass} {...register('date')} />
              <input required type="time" className={inputClass} {...register('time')} />
              <select className={inputClass} {...register('service')}>
                <option>General Medicine</option>
                <option>Dental</option>
                <option>Physiotherapy</option>
                <option>Diagnostics</option>
                <option>Dermatology</option>
                <option>Women's Health</option>
                <option>Pediatrics</option>
                <option>Mental Health</option>
              </select>
            </>
          ) : (
            <select className={`${inputClass} sm:col-span-2`} {...register('request')}>
              <option>Reschedule Appointment</option>
              <option>Prescription Refill</option>
              <option>Download Reports</option>
              <option>Billing Questions</option>
            </select>
          )}
        </div>

        <button className="btn-primary mt-6 w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit request'}
        </button>

        {isSubmitSuccessful ? (
          <p role="status" className="mt-4 rounded-2xl bg-teal-50 p-3 text-teal-800">
            Mock Salesforce lead, task, and conversation transcript created successfully.
          </p>
        ) : null}
      </form>
    </div>
  );
}
