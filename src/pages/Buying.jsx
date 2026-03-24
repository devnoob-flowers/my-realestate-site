import { Link } from "react-router-dom";
import LeadForm from "../components/LeadForm";
import { Search, FileText, DollarSign, Home, Key, Shield } from "lucide-react";

const steps = [
  {
    icon: <DollarSign size={32} className="text-red-600" />,
    step: "01",
    title: "Define Your Budget",
    description:
      "Before searching, get pre-approved so you know exactly what you can afford. This also gives you an edge over other buyers when making an offer.",
  },
  {
    icon: <Search size={32} className="text-red-600" />,
    step: "02",
    title: "Search for Homes",
    description:
      "I set up a custom MLS search based on your criteria and notify you the moment a matching home hits the market — before most buyers even know it exists.",
  },
  {
    icon: <Home size={32} className="text-red-600" />,
    step: "03",
    title: "Tour Homes",
    description:
      "We tour homes together. I point out potential issues, highlight value, and help you stay objective so you make a smart decision rather than an emotional one.",
  },
  {
    icon: <FileText size={32} className="text-red-600" />,
    step: "04",
    title: "Make an Offer",
    description:
      "I research comparable sales and help you craft a competitive offer. I negotiate on your behalf to get the best price and terms possible.",
  },
  {
    icon: <Shield size={32} className="text-red-600" />,
    step: "05",
    title: "Due Diligence",
    description:
      "After your offer is accepted, we complete inspections, appraisal, and review all disclosures. I guide you through every document and protect your interests.",
  },
  {
    icon: <Key size={32} className="text-red-600" />,
    step: "06",
    title: "Close on Your Home",
    description:
      "We close at a title company, you sign the paperwork, and you get the keys. I am with you every step of the way through closing day.",
  },
];

const faqs = [
  {
    q: "How long does it take to buy a home?",
    a: "From pre-approval to closing typically takes 30-60 days once you find the right home. Finding the home can take anywhere from days to months depending on the market.",
  },
  {
    q: "How much does it cost to use a buyer's agent?",
    a: "Nothing! As a buyer, my services are completely free to you. The seller pays the buyer agent commission.",
  },
  {
    q: "Should I sell my current home before buying?",
    a: "It depends on your financial situation. I can walk you through the pros and cons of buying first vs selling first based on your specific situation.",
  },
  {
    q: "What is earnest money?",
    a: "Earnest money is a deposit (typically 1% of the purchase price) that shows the seller you are serious. It goes toward your down payment at closing.",
  },
];

export default function Buying() {
  return (
    <div>
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-red-400 font-semibold uppercase tracking-widest text-sm mb-4">
            Education
          </p>
          <h1 className="text-5xl font-bold mb-6">Buying a Home Guide</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Whether it is your first home or your fifth, buying a home is one of
            the biggest decisions you will make. Here is how the process works
            from start to finish.
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
              How Buying a Home Works
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
          <h2 className="text-4xl font-bold mb-4">Ready to Buy a Home?</h2>
          <p className="text-red-100 text-lg mb-8">
            Let me help you find the right home at the right price.
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
