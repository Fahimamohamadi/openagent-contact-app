import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col items-center justify-center">
        <Link to="/" className="text-2xl font-bold text-green-700 hover:text-green-800 transition-colors duration-200 mb-2">
          OpenAgent
        </Link>
        <nav className="flex space-x-8 text-gray-700 font-medium justify-center">
          <Link to="/" className="hover:text-purple-700 transition-colors duration-200">Contact Us</Link>
          <Link to="/contacts-list" className="hover:text-purple-700 transition-colors duration-200">Contacts List</Link>
        </nav>
      </div>
    </header>
  );
}
