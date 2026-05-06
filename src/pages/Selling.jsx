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

export default function Selling() {
  return (
    <div>
      {/* Full Screen Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-65" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p className="text-red-400 font-semibold uppercase tracking-widest text-sm mb-6">
            Seller Resources
          </p>
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-none mb-8">
            Seller
            <br />
            <span className="text-red-500">Resources</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-10">
            Selling your home in The Woodlands, Spring, Tomball, Magnolia or
            Conroe? Blake Flowers is on your side.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/home-valuation"
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 font-bold text-lg rounded-lg transition"
            >
              Get Your Home Value
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

      {/* Blake Is On Your Side */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-4">
              Your Agent
            </p>
            <h2 className="text-5xl font-black text-gray-900 uppercase leading-tight mb-6">
              Blake Flowers
              <br />
              Is On Your Side
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              The Woodlands, TX is one of the most desirable master-planned
              communities in the country — known for its top-ranked schools,
              natural beauty, world-class amenities, and consistently strong
              home values. Selling here requires an agent who knows this market
              inside and out.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              As your listing agent, I bring a proven marketing strategy, honest
              pricing based on real data, and relentless follow-through from the
              day we list to the day we close. When you work with me, you get my
              full attention — not an assistant, not a team. Just Blake.
            </p>
            <Link
              to="/home-valuation"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold transition inline-block"
            >
              Get Your Free Home Valuation
            </Link>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
              alt="The Woodlands Texas"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Simplify Your Experience */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-red-400 font-semibold uppercase tracking-widest text-sm mb-4">
              The Process
            </p>
            <h2 className="text-5xl font-black uppercase">
              Simplify Your Experience
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Price It Right",
                desc: "Correctly pricing your home is the single most critical factor. I prepare a detailed Comparative Market Analysis based on real recent sales — not guesses — to find the price that attracts buyers and maximizes your profit.",
              },
              {
                num: "02",
                title: "Market Aggressively",
                desc: "Professional photography, MLS listing, social media campaigns, email marketing, and the full Keller Williams network. Your home gets maximum exposure to the most motivated buyers.",
              },
              {
                num: "03",
                title: "Negotiate & Close",
                desc: "When offers come in, I analyze every detail — price, terms, financing, contingencies — and negotiate on your behalf to get you the best possible outcome. I guide you all the way to closing day.",
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
              Seller Guide
            </p>
            <h2 className="text-5xl font-black text-gray-900 uppercase">
              Everything You Need to Know
            </h2>
          </div>

          <AccordionItem title="Selling Your Home is a Team Effort">
            <p>
              The overwhelming majority of home sellers find it advantageous to
              work with a licensed REALTOR®. Most homeowners feel it is better
              to entrust the sale of their biggest investment to a professional
              who understands the market, the contracts, and the negotiation
              process.
            </p>
            <p>
              There are a number of complexities to modern real estate
              transactions that your REALTOR® handles for you — from MLS access
              and marketing to buyer screening and contract negotiations. Your
              agent will also know the current condition of the market and help
              you determine the right value for your property with a Competitive
              Market Analysis.
            </p>
          </AccordionItem>

          <AccordionItem title="How to Competitively Price Your Home">
            <p>
              Correctly pricing your property is critical. Price your home too
              low and you lose money. Price it too high and buyers will shy away
              — and your home sits on the market, which makes buyers suspicious
              that something is wrong.
            </p>
            <p>I will prepare a Comparative Market Analysis that considers:</p>
            <ul className="space-y-2 mt-2">
              {[
                "Recent sale prices of comparable homes in your neighborhood",
                "Size, layout, and condition of your home vs. the competition",
                "Location — school district, proximity to amenities, subdivision",
                "Upgrades and features currently popular with buyers",
                "Current market conditions — buyers market vs. sellers market",
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

          <AccordionItem title="How to Get the Most Money for Your Home">
            <p>
              Today's buyer is well-informed and price-sensitive. A property
              priced over market value will deter serious buyers. A property
              priced under market will sell quickly — but cost you money. The
              goal is to price it right and present it perfectly to attract
              multiple offers.
            </p>
            <p>These factors directly affect what price you can expect:</p>
            <ul className="space-y-2 mt-2">
              {[
                "What are similar homes actually selling for — not just listed for?",
                "How does your square footage, bedroom count, and layout compare?",
                "What is the condition of your home vs. the competition?",
                "Does your home have amenities currently popular in the marketplace?",
                "Is it a buyers or sellers market right now?",
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

          <AccordionItem title="How I Promote Your Property">
            <p>
              Effective marketing is what separates a home that sells quickly
              for top dollar from one that sits. Here is exactly how I market
              every listing:
            </p>
            <ul className="space-y-2 mt-2">
              {[
                "Professional high-quality photography — the most important marketing tool",
                "MLS listing — syndicates to Zillow, Realtor.com, HAR.com, and hundreds of sites",
                "Social media campaigns on Facebook and Instagram targeting active buyers",
                "Email campaigns to buyers and agents searching in your price range",
                "Keller Williams network — thousands of agents and their buyer clients",
                "Open houses coordinated and managed for maximum exposure",
                "Yard signs, lockboxes, and showing coordination",
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

          <AccordionItem title="Minor Investments That Can Have Major Returns">
            <p>
              Most buyers do not have a vision — so help them. Present your home
              dressed in its best. These minor investments often have major
              returns:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {[
                {
                  title: "Fresh Paint",
                  desc: "Best return on investment of any improvement. Stick to neutral colors.",
                },
                {
                  title: "Flooring",
                  desc: "At minimum, steam clean all carpet. Replace anything worn, stained, or damaged.",
                },
                {
                  title: "Declutter",
                  desc: "If it is not necessary for daily life, box it up and store it. Less is always more.",
                },
                {
                  title: "Deep Clean",
                  desc: "The cleaner the better. Dusting, washing, waxing, and polishing everything makes a powerful impression.",
                },
                {
                  title: "Lighting",
                  desc: "Clean all fixtures and make sure every bulb works. Bright homes feel bigger and more welcoming.",
                },
                {
                  title: "Curb Appeal",
                  desc: "Mow the lawn, trim hedges, power wash the driveway, and paint or clean the front door.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </AccordionItem>

          <AccordionItem title="Preparing the Exterior — Curb Appeal">
            <p>
              Now is the time to look at your home objectively — not as your
              home, but as a product to be marketed. Curb appeal is the first
              impression buyers have before they even step inside.
            </p>
            <ul className="space-y-2 mt-2">
              {[
                "Remove all junk and clutter from the yard",
                "Mow the lawn and add a bit of fertilizer for a greener look",
                "Trim shrubbery and hedges",
                "Power wash decks, porches, driveway, and walkways",
                "Clean and paint or stain the front door",
                "Make sure all exterior lights are operational",
                "Clean exterior windows",
                "Clean gutters and downspouts",
                "Make sure the garage door is closed during showings",
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

          <AccordionItem title="Preparing the Interior — Room by Room">
            <div className="space-y-6">
              {[
                {
                  room: "Entryway",
                  items: [
                    "Clean and polish everything",
                    "Make sure it is well lit",
                    "Keep it clutter free — this is the first thing buyers see inside",
                  ],
                },
                {
                  room: "Living Room / Family Room",
                  items: [
                    "Arrange furniture for flow of traffic",
                    "Remove ashes from fireplaces",
                    "Make sure all light switches work",
                    "Clean drapes and polish floors",
                  ],
                },
                {
                  room: "Bedrooms",
                  items: [
                    "Arrange furniture for traffic flow",
                    "Keep completely clutter free",
                    "Closets should be neat and organized — buyers always look inside",
                  ],
                },
                {
                  room: "Kitchen",
                  items: [
                    "Clean all appliances inside and out",
                    "Clean countertops and cabinet faces — the shinier the better",
                    "Remove clutter and magnets from the refrigerator",
                    "Clean or replace worn flooring",
                    "Make sure grout is clean and white if you have tile",
                  ],
                },
                {
                  room: "Bathrooms",
                  items: [
                    "Fix any dripping faucets",
                    "Remove stains from all fixtures",
                    "Put out fresh clean towels",
                    "Remove any mildew",
                    "Make sure drains are clog free",
                    "Shower doors should sparkle",
                  ],
                },
                {
                  room: "Garage & Storage Areas",
                  items: [
                    "Remove all junk and clutter",
                    "Make sure areas are well lit",
                    "Organize as much as possible",
                  ],
                },
              ].map((section) => (
                <div key={section.room}>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {section.room}
                  </h4>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <CheckCircle
                          size={16}
                          className="text-red-600 shrink-0 mt-0.5"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AccordionItem>

          <AccordionItem title="Handling Offers & Closing">
            <p>
              Once an offer is made, if you intend to accept or counter, do it
              as soon as possible. A buyer can withdraw their offer at any time
              before you accept. I will walk you through every offer and help
              you evaluate not just the price but all the terms — financing,
              closing date, contingencies, and more.
            </p>
            <p>
              When you make changes to an offer, they require written approval
              from all parties. Even minor changes create an opportunity for
              either side to change their mind — which is why having an
              experienced agent guide you through negotiations is so important.
            </p>
            <p>
              The closing process is the time between signing the purchase
              contract and the day the deed is recorded and title transfers. I
              coordinate with the title company, lender, and buyer's agent to
              make sure everything stays on track and closes on time. Once
              everything is signed and funds are disbursed, your home is sold.
            </p>
          </AccordionItem>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-6xl font-black mb-2">#1</p>
              <p className="text-red-200 uppercase tracking-widest text-sm">
                Real Estate Franchise Worldwide
              </p>
              <p className="text-white font-bold mt-1">Keller Williams</p>
            </div>
            <div>
              <p className="text-6xl font-black mb-2">24hr</p>
              <p className="text-red-200 uppercase tracking-widest text-sm">
                Response Time
              </p>
              <p className="text-white font-bold mt-1">Guaranteed</p>
            </div>
            <div>
              <p className="text-6xl font-black mb-2">100%</p>
              <p className="text-red-200 uppercase tracking-widest text-sm">
                Dedicated to You
              </p>
              <p className="text-white font-bold mt-1">
                Not a Team. Just Blake.
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
              Contact
            </p>
            <h2 className="text-5xl font-black text-gray-900 uppercase mb-6">
              Let's Talk
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Ready to find out what your home is worth? Have questions about
              selling? Reach out any time — there is no pressure and no
              obligation.
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
