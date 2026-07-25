import { CONTACT_SHEET_ENDPOINT } from './config';

export interface ContactPayload {
  name: string;
  phone: string;
  message: string;
}

/**
 * Google Apps Script web apps don't answer CORS preflight requests, so a normal
 * `fetch` with a JSON content-type gets blocked by the browser before it ever
 * reaches the script. Posting as text/plain keeps this a "simple request" (no
 * preflight); the Apps Script side still receives valid JSON in
 * `e.postData.contents` and parses it the same way curl's request does.
 * The "email" field name is kept because the existing Sheet/script already
 * expects that column — the phone number is sent as its value.
 */
export async function submitContactForm(payload: ContactPayload): Promise<void> {
  const body = JSON.stringify({
    name: payload.name,
    email: payload.phone,
    message: payload.message,
    source: 'centerflow-landing'
  });

  await fetch(CONTACT_SHEET_ENDPOINT, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body
  });
  // mode: 'no-cors' makes the response opaque — we can't read status/body,
  // so a resolved promise here means "request was sent", not "confirmed saved".
}
