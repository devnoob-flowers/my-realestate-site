import { Link } from "react-router-dom";
import LeadForm from "../components/LeadForm";
import { Camera, DollarSign, Home, FileText, Key, Users } from "lucide-react";

const steps = [
  {
    icon: <DollarSign size={32} className="text-red-600" />,
    step: "01",
    title: "Price It Right",
    description:
      "Pricing your home correctly from day one is critical. I run a detailed comparative market analysis to find the sweet spot that attracts buyers and maximizes your profit.",
  },
  {
    icon: <Home size={32} className="text-red-600" />,
    step: "02",
    title: "Prepare Your Home",
    description:
      "First impressions matter. I walk through your home and give you a prioritized list of repairs and improvements that will make the biggest difference to buyers.",
  },
  {
    icon: <Camera size={32} className="text-red-600" />,
    step: "03",
    title: "Professional Marketing",
    description:
      "Your home gets professional photography, an MLS listing, social media promotion, and maximum online exposure to attract the most buyers possible.",
  },
  {
    icon: <Users size={32} className="text-red-600" />,
    step: "04",
    title: "Showings & Open Houses",
    description:
      "I coordinate all showings and open houses, gather feedback from buyers, and keep you updated on market activity so we can adjust strategy if needed.",
  },
  {
    icon: <FileText size={32} className="text-red-600" />,
    step: "05",
    title: "Review Offers",
    description:
      "When offers come in, I help you evaluate each one — not just on price but on terms, financing, and contingencies — so you pick the best overall deal.",
  },
  {
    icon: <Key size={32} className="text-red-600" />,
    step: "06",
    title: "Close & Get Paid",
    description:
      "After negotiating the best deal, we navigate inspections, appraisal, and closing. You walk away with your proceeds and move on to your next chapter.",
  },
];

const faqs = [
  {
    q: "How much does it cost to sell my home?",
    a: "Seller closing costs in Texas typically run 6-9% of the sale price, including agent commissions, title fees, and other closing costs. I provide a detailed net sheet so you know exactly what you will walk away with.",
  },
  {
    q: "How long will it take to sell my home?",
    a: "In The Woodlands area, well-priced homes typically sell within 30-60 days. Pricing and condition are the two biggest factors.",
  },
  {
    q: "Should I make repairs before selling?",
    a: "It depends on the repair. Some updates have a huge ROI, others do not. I walk through your home and give you honest advice on what is worth doing and what to skip.",
  },
  {
    q: "What is a CMA?",
    a: "A Comparative Market Analysis is a report I prepare that looks at recent sales of similar homes in your area to determine the right listing price for your home.",
  },
];

export default function Selling() {
  return (
    <div>
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-red-400 font-semibold uppercase tracking-widest text-sm mb-4">
            Education
          </p>
          <h1 className="text-5xl font-bold mb-6">Selling Your Home Guide</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Selling your home is one of the biggest financial transactions of
            your life. Here is how I help you get the best price with the least
            stress.
          </p>
          <a
            href="tel:+14096703370"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition inline-block"
          >
            Talk to Blake — (409) 670-3370
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-2">
              The Process
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              How Selling a Home Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div
                key={s.step}
                className="bg-gray-50 rounded-xl p-8 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  {s.icon}
                  <span className="text-3xl font-bold text-gray-200">
                    {s.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Sell Your Home?</h2>
          <p className="text-red-100 text-lg mb-8">
            Let me help you get the best price for your home.
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

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-2">
              FAQ
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              Common Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Get Started Today
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Fill out the form and Blake will be in touch within 24 hours.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>
    </div>
  );
}
