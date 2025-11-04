import { Link } from "react-router-dom";

export default function ThankYouPage() {
  return (
    <div className="max-w-xl mx-auto p-10 text-center bg-white rounded-xl shadow-lg mt-16 animate-fade-in">
      <h1 className="text-4xl font-extrabold mb-6 text-green-700">Thank You!</h1>
      <p className="text-lg text-gray-700 mb-6">Your message has been submitted successfully.</p>
      <Link to="/" className="inline-block px-6 py-2 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition">Go back home</Link>
    </div>
  );
}
