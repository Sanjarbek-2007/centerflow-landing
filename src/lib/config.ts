// Product domains. The landing page itself is the third — kept here so every
// deep link and footer reference comes from one place instead of scattered strings.
export const DOMAINS = {
  landing: 'https://centerflow.comma.uz',
  staffApp: 'https://centerflow-app.comma.uz',
  studentApp: 'https://student-app.comma.uz'
} as const;

export function staffAppUrl(path: string = ''): string {
  return `${DOMAINS.staffApp}${path}`;
}

export function studentAppUrl(path: string = ''): string {
  return `${DOMAINS.studentApp}${path}`;
}

// Google Apps Script Web App endpoint backing the Sheet the contact form records into.
export const CONTACT_SHEET_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbx07GEWr5b_zZWDOUOhdlVzStsXXEHLqFTcJWCOqJp9AQPCviq3BOd2j_JH-rxhID1eow/exec';
