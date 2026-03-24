import Hero from "../components/Hero";
import LeadForm from "../components/LeadForm";
import { Home as HomeIcon, Key, Building, Users } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Key size={36} className="text-red-600" />,
    title: "First Time Buyers",
    description:
      "Ready to stop renting and start owning? I specialize in guiding first-time buyers through every step — from pre-approval to closing day.",
    link: "/first-time-buyers",
  },
  {
    icon: <Building size={36} className="text-red-600" />,
    title: "New Construction",
    description:
      "Thinking about building new? I help buyers navigate new construction contracts, upgrades, and builder negotiations so you get the best deal.",
    link: "/new-construction",
  },
  {
    icon: <HomeIcon size={36} className="text-red-600" />,
    title: "Buying a Home",
    description:
      "Whether it's your first home or your fifth, I work tirelessly to find you the right home at the right price in the right neighborhood.",
    link: "/buying",
  },
  {
    icon: <Users size={36} className="text-red-600" />,
    title: "Selling Your Home",
    description:
      "Ready to sell? I create a custom marketing strategy to get your home maximum exposure and the best possible price.",
    link: "/selling",
  },
];

const neighborhoods = [
  {
    name: "The Woodlands",
    description:
      "Master-planned community with top-rated schools and world-class amenities.",
  },
  {
    name: "Spring",
    description:
      "Affordable family neighborhoods with easy access to Houston and The Woodlands.",
  },
  {
    name: "Tomball",
    description:
      "Charming small-town feel with growing communities and great schools.",
  },
  {
    name: "Magnolia",
    description:
      "Peaceful suburban living with acreage properties and new developments.",
  },
  {
    name: "Conroe",
    description:
      "Fast-growing area with lake living, new construction, and great value.",
  },
  {
    name: "The Woodlands Hills",
    description:
      "One of the newest master-planned communities in the North Houston area.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    date: "January 2026",
    text: "Blake made buying our first home so easy! He walked us through every step and we never felt lost or overwhelmed. Highly recommend!",
  },
  {
    name: "James & Lisa T.",
    date: "February 2026",
    text: "We were nervous as first-time buyers but Blake explained everything clearly. We found our dream home in The Woodlands in just 3 weeks!",
  },
  {
    name: "Marcus R.",
    date: "March 2026",
    text: "Blake helped us with a new construction home in Conroe. He negotiated upgrades we didn't even know we could ask for. Amazing agent!",
  },
];

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-2">
              What I Do
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              How I Can Help You
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition border border-gray-100 text-center"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                {service.link && (
                  <Link
                    to={service.link}
                    className="text-red-600 font-semibold hover:underline text-sm"
                  >
                    Learn More →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-red-400 font-semibold uppercase tracking-widest text-sm mb-4">
              Meet Your Agent
            </p>
            <h2 className="text-4xl font-bold mb-6">Blake Flowers</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              As a Keller Williams agent serving The Woodlands, Magnolia, and
              surrounding North Houston communities, my mission is simple — help
              people stop renting and start building wealth through
              homeownership.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I specialize in first-time buyers and new construction, meaning I
              know exactly how to guide you from "I think I'm ready" to handing
              you the keys to your new home.
            </p>
            <Link
              to="/about"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition inline-block"
            >
              More About Blake
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/src/assets/headshot.jpg"
              alt="Blake Flowers"
              className="w-72 h-72 rounded-full object-cover object-top border-4 border-red-600 shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-2">
              Client Reviews
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              What My Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-gray-50 rounded-xl p-8 border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-red-500 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-red-200 font-semibold uppercase tracking-widest text-sm mb-2">
              Where I Work
            </p>
            <h2 className="text-4xl font-bold text-white">Areas I Serve</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.map((n) => (
              <div
                key={n.name}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {n.name}
                </h3>
                <p className="text-gray-600 text-sm">{n.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-2">
              Get In Touch
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Whether you're buying, selling, or just have questions — I'm here
              to help. Fill out the form and I'll be in touch within 24 hours.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>
    </div>
  );
}
