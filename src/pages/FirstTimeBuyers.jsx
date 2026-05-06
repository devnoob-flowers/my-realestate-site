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

export default function FirstTimeBuyers() {
  return (
    <div>
      {/* Full Screen Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=1600')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-65" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p className="text-red-400 font-semibold uppercase tracking-widest text-sm mb-6">
            First Time Buyer Resources
          </p>
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-none mb-8">
            First Time
            <br />
            <span className="text-red-500">Buyers</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-10">
            Stop renting. Start owning. Here is everything you need to know
            about buying your first home in The Woodlands and North Houston.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 font-bold text-lg rounded-lg transition"
            >
              Get Started Today
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

      {/* Why Buy */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-4">
              Why Buy
            </p>
            <h2 className="text-5xl font-black text-gray-900 uppercase leading-tight mb-6">
              Stop Building
              <br />
              Your Landlord's
              <br />
              Wealth
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Every month you pay rent, you are building your landlord's equity
              — not yours. When you own a home, your monthly payment builds real
              wealth you can tap into later through selling, refinancing, or
              borrowing against your equity.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              In the North Houston area, home values have historically
              appreciated over time, making homeownership one of the best
              long-term financial decisions you can make. As a first-time buyer
              specialist, I make the process simple, stress-free, and exciting.
            </p>
            <Link
              to="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold transition inline-block"
            >
              Talk to Blake — No Pressure
            </Link>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1560440021-33f9b867899d?w=800"
              alt="First time home buyers"
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
                title: "Get Pre-Approved",
                desc: "Before you look at a single home, get pre-approved for a mortgage. This tells you exactly what you can afford and shows sellers you are a serious buyer.",
              },
              {
                num: "02",
                title: "Find Your Home",
                desc: "I set up a custom search based on your criteria and alert you immediately when matching homes hit the market — often before most buyers know they exist.",
              },
              {
                num: "03",
                title: "Make an Offer",
                desc: "I analyze comparable sales and help you craft a competitive offer. I handle all negotiations on your behalf to get you the best price and terms.",
              },
              {
                num: "04",
                title: "Option Period",
                desc: "In Texas you get an Option Period after your offer is accepted — typically 5-10 days to inspect the home and back out for any reason.",
              },
              {
                num: "05",
                title: "Appraisal & Loan",
                desc: "Your lender orders an appraisal and completes final underwriting. I keep everything on track and communicate with all parties throughout.",
              },
              {
                num: "06",
                title: "Closing Day",
                desc: "You sign the paperwork, get the keys, and become a homeowner. I am there with you every step of the way through closing day.",
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

          <AccordionItem title="How Much Money Do You Need?">
            <p>
              One of the biggest misconceptions about buying a home is that you
              need a huge down payment. Here is the reality:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {[
                {
                  title: "Down Payment",
                  amount: "3% – 20%",
                  desc: "FHA loans start at 3.5% down. Conventional can start at 3%. VA and USDA offer 0% for qualifying buyers.",
                },
                {
                  title: "Closing Costs",
                  amount: "2% – 3%",
                  desc: "Covers lender fees, title insurance, appraisal, and prepaid items like insurance and taxes.",
                },
                {
                  title: "Cash Reserves",
                  amount: "1% – 2%",
                  desc: "Lenders like to see some cash left over after closing. Having reserves strengthens your application.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-red-50 rounded-xl p-4 border border-red-100 text-center"
                >
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-2xl font-black text-red-600 mb-2">
                    {item.amount}
                  </p>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </AccordionItem>

          <AccordionItem title="Down Payment Assistance Programs in Texas">
            <p>
              Texas has several programs that can help first-time buyers cover
              down payment and closing costs. I work with lenders who specialize
              in these programs:
            </p>
            <ul className="space-y-2 mt-2">
              {[
                "TSAHC — Texas State Affordable Housing Corporation — grants up to 5% of the loan amount",
                "TDHCA — My First Texas Home program for first-time buyers",
                "SETH — Southeast Texas Housing Finance Corporation for Houston area buyers",
                "VA Loans — 0% down for eligible veterans and active military",
                "USDA Loans — 0% down for eligible rural and suburban areas",
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

          <AccordionItem title="Pre-Qualification vs Pre-Approval — What's the Difference?">
            <p>
              Pre-qualification is a quick estimate based on information you
              self-report. It takes minutes and gives you a rough idea of what
              you might qualify for — but it carries very little weight with
              sellers.
            </p>
            <p>
              Pre-approval is a thorough review of your finances by a lender.
              They verify your income, employment, assets, and credit. A
              pre-approval letter shows sellers you are a serious, qualified
              buyer and gives you a clear, accurate budget to shop within.
            </p>
            <p>
              Always get pre-approved — not just pre-qualified — before you
              start seriously looking at homes.
            </p>
          </AccordionItem>

          <AccordionItem title="Understanding the Texas Option Period">
            <p>
              The Option Period is unique to Texas real estate. After your offer
              is accepted, you pay a small fee — typically $100 to $500 — for
              the unrestricted right to terminate the contract for any reason
              within a set number of days (usually 5-10).
            </p>
            <p>
              During the Option Period, we order a professional home inspection
              to check for any issues with the property. If the inspection
              reveals problems, we can:
            </p>
            <ul className="space-y-2 mt-2">
              {[
                "Negotiate with the seller to make repairs before closing",
                "Request a price reduction or closing cost credit",
                "Walk away from the deal and get your earnest money back",
                "Accept the home as-is if the issues are minor",
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

          <AccordionItem title="What Happens at Closing?">
            <p>
              Closing is the final step in the home buying process. It takes
              place at a title company and typically takes 1-2 hours. Here is
              what to expect:
            </p>
            <ul className="space-y-2 mt-2">
              {[
                "You will sign a large stack of documents — your loan paperwork, title documents, and closing disclosures",
                "You will bring a cashier's check or wire your down payment and closing costs",
                "The title company verifies all funds and documents are in order",
                "Once everything is signed and funded, the deed is recorded",
                "You receive your keys — you are officially a homeowner!",
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
              I am present at your closing to make sure everything goes smoothly
              and to answer any last-minute questions.
            </p>
          </AccordionItem>

          <AccordionItem title="New Construction vs. Existing Home — Which is Right for You?">
            <p>Both options have real advantages. Here is how they compare:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">
                  New Construction
                </h4>
                <ul className="space-y-2">
                  {[
                    "Brand new — never lived in",
                    "Builder warranties on systems and structure",
                    "Ability to customize finishes and options",
                    "Modern floor plans and energy efficiency",
                    "Takes 6-12 months to build",
                    "Builder contracts require careful review",
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
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Existing Home</h4>
                <ul className="space-y-2">
                  {[
                    "Established neighborhoods with mature trees",
                    "Can move in within 30-45 days of offer",
                    "More character and unique features",
                    "Price is negotiable with the seller",
                    "Inspection reveals condition upfront",
                    "May need updates or repairs",
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
              <p className="text-6xl font-black mb-2">3%</p>
              <p className="text-red-200 uppercase tracking-widest text-sm">
                Minimum Down Payment
              </p>
              <p className="text-white font-bold mt-1">
                You may need less than you think
              </p>
            </div>
            <div>
              <p className="text-6xl font-black mb-2">24hr</p>
              <p className="text-red-200 uppercase tracking-widest text-sm">
                Response Time
              </p>
              <p className="text-white font-bold mt-1">Blake responds fast</p>
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
              get pre-approved today — reach out and let Blake walk you through
              the process. No pressure, no obligation.
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
