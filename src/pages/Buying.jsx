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

export default function Buying() {
  return (
    <div>
      {/* Full Screen Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1494526585095-c41746248156?w=1600')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-65" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p className="text-red-400 font-semibold uppercase tracking-widest text-sm mb-6">
            Buyer Resources
          </p>
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-none mb-8">
            Buying
            <br />
            <span className="text-red-500">a Home</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-10">
            Whether it is your first home or your fifth — buying a home is one
            of the biggest decisions you will ever make. Here is everything you
            need to know.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 font-bold text-lg rounded-lg transition"
            >
              Start Your Search
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

      {/* Why Work With Blake */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-4">
              Your Agent
            </p>
            <h2 className="text-5xl font-black text-gray-900 uppercase leading-tight mb-6">
              You Deserve
              <br />
              Full Attention
              <br />& Expert Guidance
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              When you work with Blake Flowers, you are not getting handed off
              to an assistant or buried in a team of agents. You get Blake —
              directly. From your first call to closing day, I am your point of
              contact and your advocate.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              As a Keller Williams agent in The Woodlands, I have access to the
              best tools, data, and network in the industry. I know the North
              Houston market — the neighborhoods, the builders, the schools, and
              the price trends. That knowledge works for you.
            </p>
            <Link
              to="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold transition inline-block"
            >
              Work With Blake
            </Link>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800"
              alt="Beautiful home in The Woodlands"
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
              How Buying a Home Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Define Your Budget",
                desc: "Get pre-approved so you know exactly what you can afford. This gives you a clear budget and makes your offers stronger with sellers.",
              },
              {
                num: "02",
                title: "Search for Homes",
                desc: "I set up a custom MLS search and notify you immediately when matching homes hit the market — often before most buyers know they exist.",
              },
              {
                num: "03",
                title: "Tour Homes",
                desc: "We tour homes together. I point out issues, highlight value, and help you stay objective so you make a smart decision.",
              },
              {
                num: "04",
                title: "Make an Offer",
                desc: "I research comparable sales and craft a competitive offer. I negotiate on your behalf to get the best price and terms.",
              },
              {
                num: "05",
                title: "Due Diligence",
                desc: "After your offer is accepted, we complete inspections, appraisal, and review all disclosures. I guide you through everything.",
              },
              {
                num: "06",
                title: "Close on Your Home",
                desc: "We close at a title company, you sign the paperwork, and you get the keys. I am with you every step of the way.",
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
              Buyer Guide
            </p>
            <h2 className="text-5xl font-black text-gray-900 uppercase">
              Everything You Need to Know
            </h2>
          </div>

          <AccordionItem title="Why Work With a Buyer's Agent?">
            <p>
              A buyer's agent represents your interests — not the seller's. The
              listing agent works for the seller and is legally obligated to get
              them the best deal. Having your own agent levels the playing
              field.
            </p>
            <p>As your buyer's agent, I:</p>
            <ul className="space-y-2 mt-2">
              {[
                "Search the full MLS for homes matching your criteria",
                "Schedule and attend all showings with you",
                "Provide market data and comparable sales analysis",
                "Prepare and submit your offer on your behalf",
                "Negotiate price, terms, repairs, and concessions",
                "Coordinate inspections, appraisals, and closing",
                "Review all contracts and disclosures with you",
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
            <p className="mt-4 font-semibold text-gray-900">
              Best of all — my services as your buyer's agent are completely
              free to you. The seller pays the buyer's agent commission.
            </p>
          </AccordionItem>

          <AccordionItem title="How to Make a Competitive Offer">
            <p>
              In a competitive market, the right offer strategy can make the
              difference between getting the home and losing it. Here is what
              goes into a strong offer:
            </p>
            <ul className="space-y-2 mt-2">
              {[
                "Price — based on comparable sales, not just the list price",
                "Earnest money — a larger deposit signals serious intent",
                "Option period — shorter option periods are more attractive to sellers",
                "Closing date — flexible or fast closings can win deals",
                "Financing — a strong pre-approval letter from a reputable lender",
                "Contingencies — fewer contingencies make your offer cleaner",
                "Personal letter — sometimes connecting with the seller makes a difference",
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

          <AccordionItem title="The Home Inspection — What to Expect">
            <p>
              After your offer is accepted, you enter the Option Period and
              order a professional home inspection. The inspector examines the
              home from top to bottom — roof, foundation, electrical, plumbing,
              HVAC, and more.
            </p>
            <p>After the inspection, you have several options:</p>
            <ul className="space-y-2 mt-2">
              {[
                "Request the seller make repairs before closing",
                "Request a price reduction or closing cost credit in lieu of repairs",
                "Accept the home as-is if issues are minor",
                "Terminate the contract and get your earnest money back",
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
              I walk through every inspection report with you and help you
              prioritize what to ask for so you do not lose the deal over minor
              items or let major issues slide.
            </p>
          </AccordionItem>

          <AccordionItem title="Understanding Earnest Money in Texas">
            <p>
              Earnest money is a deposit you make when your offer is accepted —
              typically 1% of the purchase price in Texas. It is held by the
              title company and goes toward your down payment at closing.
            </p>
            <p>When do you get your earnest money back?</p>
            <ul className="space-y-2 mt-2">
              {[
                "If you terminate during the Option Period — you get it back",
                "If the home does not appraise and you cannot reach agreement — you may get it back",
                "If your financing falls through due to lender issues — depends on contract terms",
                "If you terminate after the Option Period without a valid reason — you may lose it",
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

          <AccordionItem title="Should I Buy or Keep Renting?">
            <p>
              This is one of the most common questions I get. Here are the key
              factors to consider:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <h4 className="font-bold text-gray-900 mb-3">
                  Reasons to Buy Now
                </h4>
                <ul className="space-y-2">
                  {[
                    "Build equity instead of paying rent",
                    "Lock in your monthly payment",
                    "Tax benefits of homeownership",
                    "Freedom to customize your space",
                    "Historically home values appreciate",
                    "Stability for your family",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle
                        size={16}
                        className="text-red-600 shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-3">
                  Reasons to Wait
                </h4>
                <ul className="space-y-2">
                  {[
                    "Need to build more savings",
                    "Credit score needs improvement",
                    "Job situation is uncertain",
                    "Planning to move within 2 years",
                    "Market conditions in your area",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle
                        size={16}
                        className="text-gray-400 shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem title="Neighborhoods in The Woodlands Area">
            <p>
              The North Houston area has a wide variety of neighborhoods at
              different price points. Here is a quick overview of the areas I
              serve:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {[
                {
                  name: "The Woodlands",
                  desc: "Master-planned community with top schools, world-class amenities, and strong home values. $400K-$2M+.",
                },
                {
                  name: "Spring",
                  desc: "Affordable suburban neighborhoods with easy access to The Woodlands and Houston. $250K-$450K.",
                },
                {
                  name: "Tomball",
                  desc: "Charming small-town feel with great schools and growing new construction. $300K-$600K.",
                },
                {
                  name: "Magnolia",
                  desc: "Peaceful suburban living with acreage options and new developments. $300K-$700K.",
                },
                {
                  name: "Conroe",
                  desc: "Fast-growing area with lake living, new construction, and excellent value. $250K-$500K.",
                },
                {
                  name: "The Woodlands Hills",
                  desc: "One of the newest master-planned communities in the area with resort-style amenities. $300K-$600K.",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="bg-gray-50 rounded-xl p-4 border border-gray-100"
                >
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
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
                Buyer representation is free
              </p>
            </div>
            <div>
              <p className="text-6xl font-black mb-2">30-45</p>
              <p className="text-red-200 uppercase tracking-widest text-sm">
                Days to Close
              </p>
              <p className="text-white font-bold mt-1">
                Typical timeline once under contract
              </p>
            </div>
            <div>
              <p className="text-6xl font-black mb-2">100%</p>
              <p className="text-red-200 uppercase tracking-widest text-sm">
                Dedicated to You
              </p>
              <p className="text-white font-bold mt-1">
                Not a team. Just Blake.
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
              Ready to Buy?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Whether you are just starting to think about buying or ready to
              make an offer today — reach out and let Blake guide you through
              the process from start to finish.
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
