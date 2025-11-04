import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import ContactsList from "./pages/ContactsList";
import ThankYou from "./pages/ThankYouPage";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen bg-white flex flex-col items-center justify-center">
        <Routes>
          <Route
            path="/"
            element={<ContactUs />}
          />
          <Route path="/contacts-list" element={<ContactsList />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
