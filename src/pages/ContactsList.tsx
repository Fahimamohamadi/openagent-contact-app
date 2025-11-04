import { useEffect, useState } from "react";
import { fetchContacts, verifyContact, deleteContact, type Contact } from "../api";

export default function ContactsList() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const loadContacts = async () => {
    const data = await fetchContacts();
    setContacts(data);
  };

  useEffect(() => { loadContacts(); }, []);

  const handleVerify = async (id: number) => {
    await verifyContact(id);
    loadContacts();
  };

  const handleDelete = async (id: number) => {
    await deleteContact(id);
    loadContacts();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 animate-fade-in">
      <h1 className="text-4xl font-extrabold mb-8 text-purple-700 text-center">Contacts List</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border rounded-xl shadow-lg bg-white">
          <thead>
            <tr className="bg-purple-50">
              <th className="border p-3 text-left">Name</th>
              <th className="border p-3 text-left">Email</th>
              <th className="border p-3 text-left">Phone</th>
              <th className="border p-3 text-center">Verified</th>
              <th className="border p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(c => (
              <tr key={c.id} className="text-center hover:bg-purple-50 transition">
                <td className="border p-3">{c.firstName} {c.lastName}</td>
                <td className="border p-3">{c.email}</td>
                <td className="border p-3">{c.phone}</td>
                <td className="border p-3">{c.verified ? "✅" : "❌"}</td>
                <td className="border p-3 space-x-2">
                  <button
                    disabled={!!c.verified}
                    onClick={() => handleVerify(c.id!)}
                    className={`px-3 py-1 rounded-full font-semibold text-sm transition ${c.verified ? "bg-gray-300 text-gray-500" : "bg-green-600 text-white hover:bg-green-700"}`}
                  >
                    Verify
                  </button>
                  <button onClick={() => handleDelete(c.id!)} className="px-3 py-1 rounded-full bg-red-600 text-white font-semibold text-sm hover:bg-red-700 transition">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
