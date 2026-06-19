import { Bed, Bath, Square, MapPin, ExternalLink } from "lucide-react";

const listings = [
  {
    id: 1,
    address: "1339 Bougainvillea Dr",
    city: "Conroe, TX 77301",
    price: 275000,
    bedrooms: 4,
    bathrooms: "2 Full & 2 Half",
    sqft: 2360,
    badge: "Just Listed",
    harUrl:
      "https://www.har.com/homedetail/1339-bougainvillea-dr-conroe-tx-77301/16305207",
    image: "src/assets/01-WSL00002_print.jpg",
    description:
      "Move-in ready 4 bedroom home in Ladera Trails with open layout, upgraded kitchen, covered patio, outdoor kitchen, and EV charger.",
    features: [
      "Move-in ready",
      "Open layout",
      "Upgraded kitchen",
      "Covered patio",
      "Outdoor kitchen",
      "EV charger",
    ],
  },
  {
    id: 2,
    address: "14210 Glacier Bay Ct",
    city: "Conroe, TX 77384",
    price: 299950,
    bedrooms: 4,
    bathrooms: "2 Full",
    sqft: 1909,
    badge: "For Sale",
    harUrl:
      "https://www.har.com/homedetail/14210-glacier-bay-ct-conroe-tx-77384/15155771",
    image: "src/assets/770125795.jpeg",
    description:
      "Beautiful 4 bedroom, 2 bath home on a 0.14 acre lot. Great layout and ready for its next owner.",
    features: ["4 Bedrooms", "2 Full Baths", "0.14 Acre Lot"],
  },
];

export default function Listings() {
  return (
    <div>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-red-400 font-semibold uppercase tracking-widest text-sm mb-4">
            Blake's Listings
          </p>
          <h1 className="text-5xl font-bold mb-4">Current Listings</h1>
          <p className="text-gray-300 text-lg">
            Homes for sale in Conroe and the surrounding North Houston area
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {listings.map((listing) => {
              return (
                <div
                  key={listing.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition"
                >
                  <div className="relative">
                    <img
                      src={listing.image}
                      alt={listing.address}
                      className="w-full h-64 object-cover"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase bg-green-500 text-white">
                      {listing.badge}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-3xl font-bold text-gray-900 mb-1">
                      ${listing.price.toLocaleString()}
                    </p>
                    <p className="text-gray-600 flex items-center gap-1 mb-4">
                      <MapPin size={16} />
                      {listing.address}, {listing.city}
                    </p>
                    <div className="flex gap-4 text-gray-500 text-sm mb-4">
                      <span className="flex items-center gap-1">
                        <Bed size={16} />
                        {listing.bedrooms} bd
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath size={16} />
                        {listing.bathrooms}
                      </span>
                      <span className="flex items-center gap-1">
                        <Square size={16} />
                        {listing.sqft.toLocaleString()} sqft
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {listing.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {listing.features.map((f) => {
                        return (
                          <span
                            key={f}
                            className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                          >
                            {f}
                          </span>
                        );
                      })}
                    </div>
                    <a
                      href={listing.harUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold transition"
                    >
                      <span>View Full Listing on HAR</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
