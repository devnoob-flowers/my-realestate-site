import { Phone, Mail, Home } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home className="text-red-600" size={24} />
              <div>
                <p className="font-bold text-white leading-none">
                  Blake Flowers
                </p>
                <p className="text-xs text-red-400 leading-none">
                  Keller Williams Realty
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Helping first-time buyers and families find their perfect home in
              The Woodlands and surrounding North Houston communities.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-widest text-sm">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+14096703370"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm"
              >
                <Phone size={16} className="text-red-500" />
                (409) 670-3370
              </a>
              <a
                href="mailto:bdflowerss@icloud.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm"
              >
                <Mail size={16} className="text-red-500" />
                bdflowerss@icloud.com
              </a>
              <p className="text-gray-400 text-sm">
                The Woodlands & Magnolia, TX
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-widest text-sm">
              Follow Me
            </h3>
            <div className="flex gap-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/blake.flowers.3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/blakeflowersrealtor/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                </svg>
              </a>
            </div>
            <p className="text-gray-500 text-xs mt-4">
              Update links with your actual social media profiles
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-xs">
            © 2026 Blake Flowers | Keller Williams Realty | The Woodlands, TX |
            Licensed Texas Realtor
          </p>
        </div>
      </div>
    </footer>
  );
}
