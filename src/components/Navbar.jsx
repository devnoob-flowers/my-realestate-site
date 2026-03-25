import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import kwLogo from "../assets/kwlogo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src={kwLogo} alt="Keller Williams" className="h-10 w-auto" />
            <div>
              <p className="font-bold text-gray-900 leading-none">
                Blake Flowers
              </p>
              <p className="text-xs text-red-600 leading-none">
                Keller Williams Realty
              </p>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-red-600 font-medium transition"
            >
              Home
            </Link>
            <Link
              to="/find-a-home"
              className="text-gray-700 hover:text-red-600 font-medium transition"
            >
              Find a Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-red-600 font-medium transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-red-600 font-medium transition"
            >
              Contact
            </Link>
            <a
              href="tel:+14096703370"
              className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition"
            >
              Call Now
            </a>
          </div>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-red-600 font-medium"
          >
            Home
          </Link>
          <Link
            to="/find-a-home"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-red-600 font-medium"
          >
            Find a Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-red-600 font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-red-600 font-medium"
          >
            Contact
          </Link>
          <a
            href="tel:+14096703370"
            className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium text-center"
          >
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
}
