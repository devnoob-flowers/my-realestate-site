import { useState } from "react";
import { Link } from "react-router-dom";
import LeadForm from "../components/LeadForm";
import { ChevronDown, ChevronUp, CheckCircle, Phone } from "lucide-react";

function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-6 text-left"
      >
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        {open ? (
          <ChevronUp className="text-red-600 shrink-0" />
        ) : (
          <ChevronDown className="text-red-600 shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-6 text-gray-600 leading-relaxed space-y-4">
          {children}
        </div>
      )}
    </div>
  );
}

export default function NewConstruction() {
  return (
    <div>
      {/* Full Screen Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-65" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p className="text-red-400 font-semibold uppercase tracking-widest text-sm mb-6">
            New Construction Resources
          </p>
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-none mb-8">
            New
            <br />
            <span className="text-red-500">Construction</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-10">
            Thinking about buying a brand new home in The Woodlands, Conroe,
            Magnolia, or surrounding areas? Here is everything you need to know
            before you sign with a builder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 font-bold text-lg rounded-lg transition"
            >
              Talk to Blake First
            </Link>
            <a
              href="tel:+14096703370"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 font-bold text-lg rounded-lg transition"
            >
              Call (409) 670-3370
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Why You Need an Agent */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-4">
              Critical Advice
            </p>
            <h2 className="text-5xl font-black text-gray-900 uppercase leading-tight mb-6">
              Never Walk Into
              <br />a Builder's Office
              <br />
              Without an Agent
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              The friendly sales agent at the model home works for the builder —
              not for you. Their job is to sell you a home at the highest
              possible price with the best terms for the builder. You need
              someone on your side.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              As your buyer's agent, my services are completely free to you on
              new construction. The builder pays my commission. You get expert
              representation, contract review, upgrade negotiation, and someone
              watching out for your interests — at no cost.
            </p>
            <Link
              to="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold transition inline-block"
            >
              Talk to Blake Before You Visit
            </Link>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800"
              alt="New construction home"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Step by Step */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-red-400 font-semibold uppercase tracking-widest text-sm mb-4">
              The Process
            </p>
            <h2 className="text-5xl font-black uppercase">
              How New Construction Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Choose Your Builder",
                desc: "Not all builders are equal. I help you research builders in your target area — comparing quality, reputation, warranty terms, and value.",
              },
              {
                num: "02",
                title: "Get Pre-Approved",
                desc: "New construction financing works differently than resale. I connect you with lenders who specialize in builder financing to get you the best rate.",
              },
              {
                num: "03",
                title: "Review the Contract",
                desc: "Builder contracts are written to protect the builder. I review every page and negotiate on your behalf before you sign anything.",
              },
              {
                num: "04",
                title: "Select Upgrades",
                desc: "The design center can be overwhelming. I help you choose upgrades that add real value and avoid expensive options that do not increase resale value.",
              },
              {
                num: "05",
                title: "Pre-Closing Inspection",
                desc: "Before closing, I bring in a third-party inspector to walk the home and identify any items the builder needs to fix before you move in.",
              },
              {
                num: "06",
                title: "Close & Move In",
                desc: "We close on your brand new home. I coordinate with the builder, lender, and title company to make sure everything goes smoothly.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="border border-gray-800 rounded-2xl p-8"
              >
                <p className="text-6xl font-black text-gray-800 mb-4">
                  {item.num}
                </p>
                <h3 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Resource Accordion */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-4">
              New Construction Guide
            </p>
            <h2 className="text-5xl font-black text-gray-900 uppercase">
              Everything You Need to Know
            </h2>
          </div>

          <AccordionItem title="Why You Need a Buyer's Agent for New Construction">
            <p>
              Many first-time buyers assume they do not need an agent when
              buying new construction because they are buying directly from a
              builder. This is one of the most costly mistakes a buyer can make.
            </p>
            <p>
              The builder's sales agent is a licensed professional whose job is
              to represent the builder's interests — not yours. They are skilled
              at selling homes at full price with builder-friendly terms. Having
              your own agent costs you nothing and gives you:
            </p>
            <ul className="space-y-2 mt-2">
              {[
                "Independent contract review before you sign anything",
                "Negotiation on price, upgrades, and closing costs",
                "Knowledge of which builders have the best reputations",
                "A pre-closing inspection to catch issues before you move in",
                "Someone advocating for you throughout the entire process",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-red-600 shrink-0 mt-0.5"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </AccordionItem>

          <AccordionItem title="Can You Negotiate With a Builder?">
            <p>
              Yes — but it requires knowing what to ask for and when to ask.
              Builders rarely reduce the base price of a home because it affects
              the comp values in their community. However, they will often
              negotiate on:
            </p>
            <ul className="space-y-2 mt-2">
              {[
                "Free or discounted upgrades — flooring, countertops, cabinets",
                "Closing cost contributions — builders often pay 2-3% toward closing costs",
                "Rate buydowns — builders with in-house lenders sometimes offer below-market rates",
                "Lot premiums — the extra cost for a premium lot location",
                "Move-in packages — appliances, blinds, fencing",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-red-600 shrink-0 mt-0.5"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p>
              The best time to negotiate is at the end of a builder's quarter
              when they are trying to hit sales targets. I know when and how to
              push for the best deal.
            </p>
          </AccordionItem>

          <AccordionItem title="Understanding the Builder Contract">
            <p>
              Builder contracts are not standard Texas real estate contracts.
              They are custom documents written by the builder's legal team to
              protect the builder's interests. Key things to watch for:
            </p>
            <ul className="space-y-2 mt-2">
              {[
                "Earnest money — builders often require large deposits that are non-refundable",
                "Change order policies — how upgrades and changes are handled and priced",
                "Completion date — builders often have wide windows and limited liability for delays",
                "Warranty terms — what is covered, for how long, and how to make claims",
                "Lender requirements — some builders require you to use their in-house lender",
                "Price escalation clauses — can the price go up after you sign?",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-red-600 shrink-0 mt-0.5"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </AccordionItem>

          <AccordionItem title="Choosing Your Upgrades Wisely">
            <p>
              The design center is one of the most exciting — and dangerous —
              parts of buying new construction. Builders make significant profit
              in the design center, and it is easy to overspend on upgrades that
              do not add equivalent resale value.
            </p>
            <p>Upgrades that generally add good value:</p>
            <ul className="space-y-2 mt-2">
              {[
                "Hardwood or luxury vinyl plank flooring — buyers love it",
                "Kitchen cabinet upgrades — one of the most noticed features",
                "Stone or quartz countertops — expected by today's buyers",
                "Extra bathroom — adds significant resale value",
                "Covered patio — very popular in Texas",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-red-600 shrink-0 mt-0.5"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Upgrades that often do not recoup their cost:
            </p>
            <ul className="space-y-2 mt-2">
              {[
                "Premium appliance packages — buyers often replace anyway",
                "Media room wiring — technology changes too fast",
                "Elaborate landscaping packages — personal taste varies widely",
                "Premium exterior elevations — hard to recoup at resale",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-500">
                  <CheckCircle
                    size={18}
                    className="text-gray-400 shrink-0 mt-0.5"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </AccordionItem>

          <AccordionItem title="New Construction Communities in The Woodlands Area">
            <p>
              There are several active new construction communities in the North
              Houston area I work with regularly. Here are some of the most
              popular:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {[
                {
                  name: "The Woodlands Hills",
                  city: "Willis, TX",
                  desc: "Master-planned community by The Howard Hughes Corporation with resort-style amenities.",
                },
                {
                  name: "Woodhavyn",
                  city: "Magnolia, TX",
                  desc: "Shea Homes community with beautiful designs and great value in Magnolia ISD.",
                },
                {
                  name: "Grand Central Park",
                  city: "Conroe, TX",
                  desc: "Large master-planned community near I-45 with multiple builders and price points.",
                },
                {
                  name: "Harmony",
                  city: "Spring, TX",
                  desc: "Established master-planned community with excellent amenities near The Woodlands.",
                },
                {
                  name: "Audubon",
                  city: "Magnolia, TX",
                  desc: "Growing community with new construction homes and acreage options.",
                },
                {
                  name: "Fosters Ridge",
                  city: "Conroe, TX",
                  desc: "Established neighborhood with great value and easy access to I-45.",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="bg-gray-50 rounded-xl p-4 border border-gray-100"
                >
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-red-600 text-sm mb-1">{item.city}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </AccordionItem>

          <AccordionItem title="The Pre-Closing Inspection — Why It Matters">
            <p>
              Just because a home is brand new does not mean it is perfect. New
              construction homes regularly have issues — from minor cosmetic
              items to significant structural or mechanical problems. A
              pre-closing inspection by an independent third-party inspector is
              essential.
            </p>
            <p>Common issues found in new construction inspections:</p>
            <ul className="space-y-2 mt-2">
              {[
                "Improper grading or drainage around the foundation",
                "HVAC installation issues — improper sizing or ductwork",
                "Electrical issues — improper wiring or missing grounds",
                "Plumbing leaks or improper pipe installation",
                "Insulation gaps or missing insulation in attic",
                "Roofing installation defects",
                "Windows and doors not properly sealed or aligned",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-red-600 shrink-0 mt-0.5"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p>
              I always recommend a pre-closing inspection on new construction.
              The builder is required to fix legitimate defects before closing —
              but only if they are documented.
            </p>
          </AccordionItem>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-6xl font-black mb-2">$0</p>
              <p className="text-red-200 uppercase tracking-widest text-sm">
                Cost to You
              </p>
              <p className="text-white font-bold mt-1">
                Builder pays my commission
              </p>
            </div>
            <div>
              <p className="text-6xl font-black mb-2">6-12</p>
              <p className="text-red-200 uppercase tracking-widest text-sm">
                Months to Build
              </p>
              <p className="text-white font-bold mt-1">
                Typical build timeline
              </p>
            </div>
            <div>
              <p className="text-6xl font-black mb-2">10yr</p>
              <p className="text-red-200 uppercase tracking-widest text-sm">
                Structural Warranty
              </p>
              <p className="text-white font-bold mt-1">
                Standard builder coverage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1">
            <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-4">
              Get Started
            </p>
            <h2 className="text-5xl font-black text-gray-900 uppercase mb-6">
              Thinking About New Construction?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Before you visit a single model home, talk to Blake. I will help
              you understand what to look for, what to ask, and how to get the
              best deal from your builder.
            </p>
            <div className="space-y-4">
              <a
                href="tel:+14096703370"
                className="flex items-center gap-3 text-gray-700 hover:text-red-600 transition"
              >
                <Phone size={20} className="text-red-600" />
                <span className="font-bold text-lg">(409) 670-3370</span>
              </a>
              <p className="text-gray-500">
                10055 Grogans Mill Rd Suite 410, The Woodlands, TX 77380
              </p>
            </div>
          </div>
          <div className="flex-1">
            <LeadForm />
          </div>
        </div>
      </section>
    </div>
  );
}
