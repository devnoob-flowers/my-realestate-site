import { Search, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function FindAHome() {
  return (
    <div>
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-red-400 font-semibold uppercase tracking-widest text-sm mb-4">
            Search Homes
          </p>
          <h1 className="text-5xl font-bold mb-6">Find Your Perfect Home</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Search all available homes in The Woodlands, Spring, Tomball,
            Magnolia, Conroe and surrounding areas.
          </p>
          <a
            href="https://blakeflowers.kw.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg font-bold text-xl transition inline-flex items-center gap-2"
          >
            <Search size={22} />
            Search All Homes
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-2">
              Areas I Serve
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              Search by Neighborhood
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "The Woodlands", zip: "77380" },
              { name: "Spring", zip: "77373" },
              { name: "Tomball", zip: "77375" },
              { name: "Magnolia", zip: "77354" },
              { name: "Conroe", zip: "77301" },
              { name: "Houston", zip: "77001" },
            ].map((area) => (
              <a
                key={area.name}
                href="https://blakeflowers.kw.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition flex items-center gap-4"
              >
                <MapPin size={24} className="text-red-600 shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">{area.name}</h3>
                  <p className="text-gray-500 text-sm">ZIP: {area.zip}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Cannot Find What You Are Looking For?
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Tell me exactly what you need and I will find it for you — even
            before it hits the market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14096703370"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold transition inline-block"
            >
              Call (409) 670-3370
            </a>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold transition inline-block hover:bg-white hover:text-red-600"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
