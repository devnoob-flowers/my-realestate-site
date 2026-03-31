import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    window.open("https://blakeflowers.kw.com/search", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600')`,
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <p className="text-red-400 font-semibold uppercase tracking-widest mb-4 text-sm">
          Keller Williams Realty | The Woodlands & Magnolia
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Your Partner in <br />
          <span className="text-red-500">Real Estate</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto">
          Expert Guidance for one of life's biggest decisions
        </p>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto"
        >
          <input
            type="text"
            placeholder="Search by city, neighborhood, or zip code..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition"
          >
            <Search size={20} />
            Search
          </button>
        </form>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
