import LeadForm from "../components/LeadForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: <Phone size={28} className="text-red-600" />,
    title: "Call or Text",
    detail: "(409) 670-3370",
    link: "tel:+14096703370",
  },
  {
    icon: <Mail size={28} className="text-red-600" />,
    title: "Email",
    detail: "Blake.flowers@kw.com",
    link: "mailto:blake.flowers@kw.com",
  },
  {
    icon: <MapPin size={28} className="text-red-600" />,
    title: "Office",
    detail: "Keller Williams | The Woodlands & Magnolia",
    link: "https://maps.google.com/?q=10055+Grogans+Mill+Rd+The+Woodlands+TX+77380",
  },
  {
    icon: <Clock size={28} className="text-red-600" />,
    title: "Availability",
    detail: "Mon - Sun: 8am - 8pm",
    link: null,
  },
];

export default function Contact() {
  return (
    <div>
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-red-400 font-semibold uppercase tracking-widest text-sm mb-4">
            Get In Touch
          </p>
          <h1 className="text-5xl font-bold mb-6">Contact Blake</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Whether you're ready to buy, thinking about selling, or just have
            questions — I'm here to help.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-center"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <p className="font-bold text-gray-900 mb-2">{item.title}</p>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-red-600 hover:underline text-sm"
                  >
                    {item.detail}
                  </a>
                ) : (
                  <p className="text-gray-600 text-sm">{item.detail}</p>
                )}
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900">
                Let's Talk Real Estate
              </h2>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Prefer to Call or Text?</h2>
          <a
            href="tel:+14096703370"
            className="bg-white text-red-600 px-10 py-4 rounded-lg font-bold text-xl inline-block mt-4"
          >
            (409) 670-3370
          </a>
        </div>
      </section>
    </div>
  );
}
