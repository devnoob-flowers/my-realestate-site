import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function LeadForm() {
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
          interest: data.interest,
          message: data.message || "No message provided",
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
      <div className="text-center py-12">
        <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600">
          Thank you! Blake will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            {...register("name", { required: true })}
            placeholder="John Smith"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">Name is required</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email *
          </label>
          <input
            {...register("email", { required: true })}
            placeholder="john@email.com"
            type="email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">Email is required</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Phone
          </label>
          <input
            {...register("phone")}
            placeholder="(409) 555-0000"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            I Am Interested In
          </label>
          <select
            {...register("interest")}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
          >
            <option value="buying">Buying a Home</option>
            <option value="first_time">First Time Buyer</option>
            <option value="new_construction">New Construction</option>
            <option value="selling">Selling My Home</option>
            <option value="just_looking">Just Browsing</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Message
        </label>
        <textarea
          {...register("message")}
          placeholder="Tell me a little about what you're looking for..."
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-bold text-lg transition disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
