import { Link } from "react-router-dom";
import LeadForm from "../components/LeadForm";
import {
  CheckCircle,
  DollarSign,
  Home,
  FileText,
  Key,
  Search,
  Shield,
} from "lucide-react";

const steps = [
  {
    icon: <DollarSign size={32} className="text-red-600" />,
    step: "01",
    title: "Get Pre-Approved",
    description:
      "Before you start looking at homes, get pre-approved for a mortgage. This tells you exactly how much you can afford and shows sellers you are a serious buyer. I can connect you with trusted local lenders who specialize in first-time buyers.",
  },
  {
    icon: <Search size={32} className="text-red-600" />,
    step: "02",
    title: "Find Your Home",
    description:
      "Once pre-approved, we start the fun part — searching for your home! I will set up a custom search based on your needs, budget, and preferred neighborhoods. We will tour homes together and I will point out things you might miss.",
  },
  {
    icon: <FileText size={32} className="text-red-600" />,
    step: "03",
    title: "Make an Offer",
    description:
      "Found the one? I will help you craft a competitive offer based on market data. I handle all negotiations on your behalf to make sure you get the best possible price and terms.",
  },
  {
    icon: <Shield size={32} className="text-red-600" />,
    step: "04",
    title: "Inspection & Appraisal",
    description:
      "After your offer is accepted, we schedule a home inspection to check for any issues. I will walk you through the inspection report and help you negotiate repairs with the seller if needed.",
  },
  {
    icon: <Home size={32} className="text-red-600" />,
    step: "05",
    title: "Final Walkthrough",
    description:
      "Before closing day, we do a final walkthrough of the home to make sure everything is in order and any agreed repairs were completed.",
  },
  {
    icon: <Key size={32} className="text-red-600" />,
    step: "06",
    title: "Closing Day",
    description:
      "You sign the paperwork, the keys are handed over, and you are officially a homeowner! I will be there every step of the way to make sure closing goes smoothly.",
  },
];

const faqs = [
  {
    q: "How much money do I need to buy a home?",
    a: "Most first-time buyers need 3-5% for a down payment plus 2-3% for closing costs. There are also down payment assistance programs available in Texas that can help cover these costs.",
  },
  {
    q: "How long does the home buying process take?",
    a: "From pre-approval to closing typically takes 30-60 days. Finding the right home can take anywhere from a few weeks to a few months depending on the market.",
  },
  {
    q: "Do I need perfect credit to buy a home?",
    a: "No! FHA loans allow credit scores as low as 580 with a 3.5% down payment. I can connect you with lenders who work with all credit situations.",
  },
  {
    q: "How much does it cost to work with a buyer's agent?",
    a: "As a buyer, my services are free to you! The seller typically pays the buyer's agent commission, so you get expert representation at no cost.",
  },
  {
    q: "What is the difference between pre-qualification and pre-approval?",
    a: "Pre-qualification is a quick estimate based on self-reported info. Pre-approval is a thorough review of your finances by a lender and carries much more weight with sellers.",
  },
];

export default function FirstTimeBuyers() {
  return (
    <div>
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-red-400 font-semibold uppercase tracking-widest text-sm mb-4">
            Education
          </p>
          <h1 className="text-5xl font-bold mb-6">
            First Time Home Buyers Guide
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Buying your first home can feel overwhelming — but it does not have
            to be. Here is everything you need to know, step by step.
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
          <h2 className="text-4xl font-bold mb-4">
            Ready to Buy Your First Home?
          </h2>
          <p className="text-red-100 text-lg mb-8">
            I specialize in first-time buyers and would love to help you get
            started. There is no pressure — just honest advice.
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
