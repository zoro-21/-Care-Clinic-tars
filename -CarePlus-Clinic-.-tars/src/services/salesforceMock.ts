export type LeadTemperature = 'Hot' | 'Warm' | 'Cold';

export type AppointmentLead = {
  name: string;
  email: string;
  phone: string;
  service: string;
  clinic: string;
  transcript?: string;
};

export type MockLeadResponse = {
  success: boolean;
  leadId: string;
  temperature: LeadTemperature;
  payload: AppointmentLead & { status: string; source: string };
};

const STORAGE_KEY = 'careplus_mock_leads';

export const calculateLeadTemperature = (lead: AppointmentLead): LeadTemperature => {
  const text = `${lead.service} ${lead.transcript ?? ''}`;
  const hasUrgency = /pain|urgent|emergency|today|asap|fever|mental|anxiety/i.test(text);

  if (hasUrgency && lead.phone) return 'Hot';
  if (lead.email && lead.service) return 'Warm';
  return 'Cold';
};

const persistLead = (response: MockLeadResponse) => {
  if (typeof window === 'undefined') return;

  const existing = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? '[]') as MockLeadResponse[];
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify([response, ...existing].slice(0, 25)));
};

export const getStoredLeads = (): MockLeadResponse[] => {
  if (typeof window === 'undefined') return [];
  return JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? '[]') as MockLeadResponse[];
};

export async function createHealthcareLead(lead: AppointmentLead): Promise<MockLeadResponse> {
  const temperature = calculateLeadTemperature(lead);
  const response = {
    success: true,
    leadId: `00Q-${Date.now()}`,
    temperature,
    payload: { ...lead, status: 'New', source: 'CarePlus Website' },
  } satisfies MockLeadResponse;

  persistLead(response);
  return response;
}

export async function createFollowUpTask(leadId: string, temperature: LeadTemperature) {
  return {
    success: true,
    taskId: `00T-${Date.now()}`,
    leadId,
    priority: temperature === 'Hot' ? 'High' : temperature === 'Warm' ? 'Normal' : 'Low',
    subject: 'Follow up with CarePlus web lead',
  };
}

export async function storeConversationTranscript(leadId: string, transcript: string) {
  return {
    success: true,
    transcriptId: `TRN-${Date.now()}`,
    leadId,
    bytes: transcript.length,
  };
}
