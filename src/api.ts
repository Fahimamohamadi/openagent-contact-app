// src/api.ts
export const API_URL = "http://localhost:4000";

export interface Contact {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  note: string;
  verified?: number;
}

export async function fetchContacts(): Promise<Contact[]> {
  const res = await fetch(`${API_URL}/contacts`);
  return res.json();
}

export async function createContact(contact: Contact) {
  const res = await fetch(`${API_URL}/contacts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
  return res.json();
}

export async function verifyContact(id: number) {
  await fetch(`${API_URL}/contacts/${id}/verify`, { method: "PUT" });
}

export async function deleteContact(id: number) {
  await fetch(`${API_URL}/contacts/${id}`, { method: "DELETE" });
}
