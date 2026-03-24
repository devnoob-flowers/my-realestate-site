import { Link } from "react-router-dom";
import LeadForm from "../components/LeadForm";
import {
  CheckCircle,
  HardHat,
  FileText,
  DollarSign,
  Home,
  Search,
} from "lucide-react";

const steps = [
  {
    icon: <Search size={32} className="text-red-600" />,
    step: "01",
    title: "Find the Right Builder",
    description:
      "Not all builders are created equal. I help you research builders in The Woodlands, Conroe, Magnolia, and surrounding areas — comparing quality, reputation, warranty, and value.",
  },
  {
    icon: <DollarSign size={32} className="text-red-600" />,
    step: "02",
    title: "Get Pre-Approved",
    description:
      "New construction financing works differently than resale. I connect you with lenders who specialize in construction loans and builder financing so you get the best rate.",
  },
  {
    icon: <FileText size={32} className="text-red-600" />,
    step: "03",
    title: "Review the Contract",
    description:
      "Builder contracts are written to protect the builder — not you. I review every line and negotiate on your behalf to make sure you are protected and getting the best deal possible.",
  },
  {
    icon: <HardHat size={32} className="text-red-600" />,
    step: "04",
    title: "Choose Your Upgrades",
    description:
      "The design center can be overwhelming. I help you pick upgrades that add real value to your home and warn you away from expensive upgrades that do not add resale value.",
  },
  {
    icon: <CheckCircle size={32} className="text-red-600" />,
    step: "05",
    title: "Pre-Closing Inspection",
    description:
      "Before you close, we do a thorough walkthrough with a third-party inspector to catch any issues the builder needs to fix before you move in.",
  },
  {
    icon: <Home size={32} className="text-red-600" />,
    step: "06",
    title: "Close & Move In",
    description:
      "Once everything is in order, we close on your brand new home. I am there every step of the way to make sure the process goes smoothly.",
  },
];

const faqs = [
  {
    q: "Do I need a real estate agent for new construction?",
    a: "Absolutely yes! The builder has their own agent protecting their interests. You need someone in your corner. Best of all — my services as your buyer agent are free to you on new construction.",
  },
  {
    q: "Can I negotiate with a builder?",
    a: "Yes! Builders rarely budge on price but will often negotiate on upgrades, closing costs, and incentives — especially toward the end of a quarter. I know how to get the most out of these negotiations.",
  },
  {
    q: "How long does new construction take?",
    a: "Depending on the builder and market conditions, new construction typically takes 6-12 months from contract to close. Some quick move-in homes are available in 30-60 days.",
  },
  {
    q: "What is a builder warranty?",
    a: "Most builders offer a 1-year workmanship warranty, 2-year systems warranty, and 10-year structural warranty. I help you understand exactly what is covered before you sign.",
  },
];

export default function NewConstruction() {
  return (
    <div>
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-red-400 font-semibold uppercase tracking-widest text-sm mb-4">
            Education
          </p>
          <h1 className="text-5xl font-bold mb-6">
            New Construction Homes Guide
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Buying a new construction home is exciting — but there are pitfalls
            you need to avoid. Here is everything you need to know before
            signing with a builder.
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
              How New Construction Works
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
            Thinking About New Construction?
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Let me help you navigate the process and get the best deal from your
            builder.
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
