export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 text-center text-gray-500 text-sm mt-10 shadow-inner transition-all duration-300 ease-in-out flex items-center justify-center">
      <span>&copy; {new Date().getFullYear()} OpenAgent. All rights reserved.</span>
    </footer>
  );
}
