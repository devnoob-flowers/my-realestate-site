import { useState } from "react";
import { Search, Bed, Bath, Square } from "lucide-react";
import { Link } from "react-router-dom";

const listings = [
  {
    id: 1,
    address: "24 Kingwood Pines Dr, The Woodlands, TX 77380",
    price: 425000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    status: "active",
    neighborhood: "The Woodlands",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    description:
      "Beautiful 4 bedroom home in the heart of The Woodlands with updated kitchen and open floor plan.",
  },
  {
    id: 2,
    address: "512 Timber Ridge Ln, Spring, TX 77373",
    price: 315000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1950,
    status: "active",
    neighborhood: "Spring",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    description:
      "Move-in ready home in Spring with large backyard, perfect for first-time buyers.",
  },
  {
    id: 3,
    address: "8821 Magnolia Blvd, Magnolia, TX 77354",
    price: 380000,
    bedrooms: 4,
    bathrooms: 2.5,
    sqft: 2400,
    status: "active",
    neighborhood: "Magnolia",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    description:
      "Spacious home on a large lot in Magnolia with new construction feel and modern finishes.",
  },
  {
    id: 4,
    address: "1045 Tomball Pkwy, Tomball, TX 77375",
    price: 295000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1750,
    status: "pending",
    neighborhood: "Tomball",
    image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800",
    description:
      "Charming home in Tomball with great curb appeal and updated bathrooms.",
  },
  {
    id: 5,
    address: "3302 Conroe Lake Dr, Conroe, TX 77304",
    price: 340000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2200,
    status: "active",
    neighborhood: "Conroe",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800",
    description:
      "Stunning home near Lake Conroe with open concept living and a covered patio.",
  },
  {
    id: 6,
    address: "7714 Woodlands Hills Blvd, Willis, TX 77318",
    price: 360000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2600,
    status: "active",
    neighborhood: "The Woodlands Hills",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    description:
      "New construction style home in The Woodlands Hills master-planned community.",
  },
];

const neighborhoods = [
  "All",
  "The Woodlands",
  "Spring",
  "Tomball",
  "Magnolia",
  "Conroe",
  "The Woodlands Hills",
];

export default function Listings() {
  const [search, setSearch] = useState("");
  const [neighborhood, setNeighborhood] = useState("All");
  const [maxPrice, setMaxPrice] = useState(1000000);

  const filtered = listings.filter((l) => {
    const matchesSearch = l.address
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesNeighborhood =
      neighborhood === "All" || l.neighborhood === neighborhood;
    const matchesPrice = l.price <= maxPrice;
    return matchesSearch && matchesNeighborhood && matchesPrice;
  });

  return (
    <div>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-red-400 font-semibold uppercase tracking-widest text-sm mb-4">
            Browse Homes
          </p>
          <h1 className="text-5xl font-bold mb-4">Available Listings</h1>
          <p className="text-gray-300 text-lg">
            Homes for sale in The Woodlands, Spring, Tomball, Magnolia & Conroe
          </p>
        </div>
      </section>

      <section className="bg-white py-8 border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-4">
          <div className="flex items-center gap-2 flex-1 bg-gray-50 border border-gray-300 rounded-lg px-4 py-2">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search by address..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent flex-1 focus:outline-none text-gray-700"
            />
          </div>
          <select
            value={neighborhood}
            onChange={(e) => setNeighborhood(e.target.value)}
            className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none"
          >
            {neighborhoods.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <select
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none"
          >
            <option value={1000000}>Any Price</option>
            <option value={300000}>Under $300k</option>
            <option value={400000}>Under $400k</option>
            <option value={500000}>Under $500k</option>
          </select>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gray-500 mb-8">{filtered.length} homes found</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((listing) => (
              <div
                key={listing.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition"
              >
                <div className="relative">
                  <img
                    src={listing.image}
                    alt={listing.address}
                    className="w-full h-56 object-cover"
                  />
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase ${listing.status === "active" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"}`}
                  >
                    {listing.status}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-2xl font-bold text-gray-900 mb-1">
                    ${listing.price.toLocaleString()}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {listing.address}
                  </p>
                  <div className="flex gap-4 text-gray-500 text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <Bed size={16} />
                      {listing.bedrooms} bd
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath size={16} />
                      {listing.bathrooms} ba
                    </span>
                    <span className="flex items-center gap-1">
                      <Square size={16} />
                      {listing.sqft.toLocaleString()} sqft
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                    {listing.description}
                  </p>
                  <Link
                    to="/contact"
                    className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-3 rounded-lg font-bold transition"
                  >
                    Schedule a Showing
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">
                No listings match your search.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setNeighborhood("All");
                  setMaxPrice(1000000);
                }}
                className="mt-4 text-red-600 hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
