
import React from "react";

const ContactForm = () => {
  return (
    <form
      id="contact"
      className="w-full max-w-lg p-5 md:p-6 bg-white rounded-xl
      shadow-[0_8px_25px_rgba(0,0,0,0.15)]"
    >
      <h2 className="text-xl text-[#0e1527] font-bold mb-1">
        Contact Us
      </h2>


      {/* Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          aria-label="Your Name"
          className="w-full px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 border border-gray-200 rounded-lg bg-gray-50 outline-none focus:border-[#8981A4] focus:ring-2 focus:ring-[#8981A4]/20"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          aria-label="Your Email"
          className="w-full px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 border border-gray-200 rounded-lg bg-gray-50 outline-none focus:border-[#8981A4] focus:ring-2 focus:ring-[#8981A4]/20"
          required
        />
      </div>

      {/* Sector */}
      <select
        name="sector"
        aria-label="Select a sector"
        defaultValue=""
        className="w-full px-3 py-2.5 mb-3 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 outline-none focus:border-[#8981A4]"
        required
      >
        <option value="" disabled>Select a sector</option>
        <option value="steel">Steel Sector</option>
        <option value="medical">Medical Equipment Sector</option>
      </select>

      {/* Message */}
      <textarea
        name="message"
        placeholder="Your Message..."
        aria-label="Your Message"
        rows={3}
        className="w-full px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 border border-gray-200 rounded-lg bg-gray-50 outline-none focus:border-[#8981A4] focus:ring-2 focus:ring-[#8981A4]/20"
        required
      />

      {/* Submit */}
      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          className="bg-[#B20003] text-white text-sm font-semibold
          px-6 py-2.5 rounded-lg shadow-sm
          hover:bg-[#D00005] hover:shadow-md
          transition-all duration-300"
        >
          Send Message
      </button>
      </div>
      
    </form>
  );
};

export default ContactForm;
