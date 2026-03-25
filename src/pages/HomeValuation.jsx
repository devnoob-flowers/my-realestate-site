import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function HomeValuation() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await emailjs.send(
        "service_realestate",
        "template_4m2uxdq",
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || "Not provided",
          interest: "Home Valuation Request",
          message: `HOME VALUATION REQUEST\n\nProperty Address: ${data.address}`,
        },
        "Av9IqtKBGyzljTMQd",
      );
      setSubmitted(true);
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Something went wrong. Please call (409) 670-3370 directly.");
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center py-12 px-4">
          <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Request Received!
          </h2>
          <p className="text-gray-600 text-lg max-w-md mx-auto mb-4">
            Thank you! Blake will personally prepare your home valuation and
            reach out within 24 hours.
          </p>
          <p className="text-gray-500">
            Questions? Call or text{" "}
            <a href="tel:+14096703370" className="text-red-600 font-bold">
              (409) 670-3370
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto w-full">
          <p className="text-red-400 font-semibold uppercase tracking-widest text-sm mb-4">
            Free — No Obligation
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            What Is Your Home Worth?
          </h1>
          <p className="text-gray-300 text-lg mb-10">
            Get your home's value in seconds. Blake will personally prepare your
            free Comparative Market Analysis within 24 hours.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-2xl p-8 text-left shadow-2xl"
          >
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Property Address *
              </label>
              <input
                {...register("address", { required: true })}
                placeholder="123 Main Street, The Woodlands, TX 77380"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900"
              />
              {errors.address && (
                <p className="text-red-500 text-xs mt-1">Address is required</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  {...register("name", { required: true })}
                  placeholder="John Smith"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">Name is required</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  {...register("phone", { required: true })}
                  placeholder="(409) 555-0000"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">Phone is required</p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email *
              </label>
              <input
                {...register("email", { required: true })}
                placeholder="john@email.com"
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">Email is required</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-bold text-lg transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Get My Free Home Valuation"}
            </button>

            <p className="text-center text-gray-400 text-xs mt-4">
              Free — No obligation — No spam ever.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
