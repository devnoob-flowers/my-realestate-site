import { Link } from "react-router-dom";
import LeadForm from "../components/LeadForm";
import { Phone, Mail, MapPin, Award, Heart, Home } from "lucide-react";

const values = [
  {
    icon: <Heart size={32} className="text-red-600" />,
    title: "Client First",
    description:
      "Your goals are my goals. I work around your schedule, your budget, and your timeline — not mine.",
  },
  {
    icon: <Award size={32} className="text-red-600" />,
    title: "Keller Williams Trained",
    description:
      "Backed by the #1 real estate franchise in the world, I have access to the best tools, training, and technology.",
  },
  {
    icon: <Home size={32} className="text-red-600" />,
    title: "Local Expert",
    description:
      "I live and work in the communities I serve — The Woodlands, Magnolia, Spring, Tomball, and Conroe.",
  },
];

export default function About() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-red-400 font-semibold uppercase tracking-widest text-sm mb-4">
              Keller Williams Realty | The Woodlands & Magnolia
            </p>
            <h1 className="text-5xl font-bold mb-6">Meet Blake Flowers</h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I became a real estate agent because I believe homeownership is
              one of the most powerful ways to build wealth and stability for
              your family. My mission is to make that possible for everyone —
              especially first-time buyers who feel overwhelmed or unsure where
              to start.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Based at Keller Williams in The Woodlands and Magnolia, I serve
              the entire North Houston corridor — from Spring and Tomball to
              Conroe and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+14096703370"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition text-center"
              >
                Call (409) 670-3370
              </a>

              <Link
                to="/contact"
                className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-bold transition text-center"
              >
                Send a Message
              </Link>
            </div>
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

      {/* My Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-2">
              My Story
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              Why I Do What I Do
            </h2>
          </div>

          <div className="prose max-w-none text-gray-600 text-lg leading-relaxed space-y-6">
            <p>
              Growing up, I saw firsthand how owning a home changes everything
              for a family. It creates stability, builds equity, and gives you a
              place to truly call your own. That's why I'm passionate about
              helping renters make the leap into homeownership — because I know
              what a difference it makes.
            </p>
            <p>
              As a new agent with Keller Williams, I bring fresh energy,
              up-to-date market knowledge, and an unmatched commitment to my
              clients. I'm not juggling dozens of transactions at once — when
              you work with me, you get my full attention and dedication from
              our first conversation to closing day and beyond.
            </p>
            <p>
              I specialize in first-time buyers and new construction because
              these are the clients who need the most guidance — and I love
              being that guide. Whether you're trying to understand the mortgage
              process, navigate a new construction contract, or figure out which
              neighborhoods fit your budget, I'm here to walk you through every
              single step.
            </p>
            <p>
              I serve The Woodlands, Spring, Tomball, Magnolia, Conroe, and
              surrounding North Houston communities. If you're thinking about
              buying or selling, let's talk — there's no pressure, no
              obligation, just honest advice.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-2">
              What I Stand For
            </p>
            <h2 className="text-4xl font-bold text-gray-900">My Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center"
              >
                <div className="flex justify-center mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {v.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-red-100 text-lg mb-12">
            Ready to start your home search or have questions? Reach out any
            time.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <div className="flex items-center justify-center gap-3">
              <Phone size={24} />
              <div className="text-left">
                <p className="text-red-200 text-sm">Call or Text</p>
                <a
                  href="tel:+14096703370"
                  className="font-bold text-lg hover:underline"
                >
                  (409) 670-3370
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <Mail size={24} />
              <div className="text-left">
                <p className="text-red-200 text-sm">Email Me</p>
                <a
                  href="mailto:blake@blakeflowersrealty.com"
                  className="font-bold text-lg hover:underline"
                >
                  blake@blakeflowersrealty.com
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <MapPin size={24} />
              <div className="text-left">
                <p className="text-red-200 text-sm">Office</p>
                <p className="font-bold text-lg">
                  The Woodlands & Magnolia, TX
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-2">
              Get In Touch
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              Send Me a Message
            </h2>
          </div>

          <LeadForm />
        </div>
      </section>
    </div>
  );
}
