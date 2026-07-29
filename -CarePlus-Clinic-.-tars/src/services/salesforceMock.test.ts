import { describe, expect, it } from 'vitest';
import { calculateLeadTemperature } from './salesforceMock';

describe('lead temperature', () => {
  it('marks urgent phone leads hot', () => {
    expect(
      calculateLeadTemperature({
        name: 'Asha',
        email: 'asha@example.com',
        phone: '9999999999',
        clinic: 'Indiranagar',
        service: 'urgent dental pain today',
      }),
    ).toBe('Hot');
  });

  it('marks complete non-urgent leads warm', () => {
    expect(
      calculateLeadTemperature({
        name: 'Asha',
        email: 'asha@example.com',
        phone: '',
        clinic: 'HSR Layout',
        service: 'Dental',
      }),
    ).toBe('Warm');
  });

  it('marks incomplete leads cold', () => {
    expect(
      calculateLeadTemperature({
        name: 'Asha',
        email: '',
        phone: '',
        clinic: 'Whitefield',
        service: '',
      }),
    ).toBe('Cold');
  });
});
