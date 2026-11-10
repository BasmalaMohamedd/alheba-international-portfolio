"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const t = useTranslations("HomePage.contact");
  const [result, setResult] = useState("");

  const onSubmit = async (event:any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "e5e2b801-8ba8-4be3-b5b1-480159977e35");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };


  return (
    <form
      onSubmit={onSubmit}
      id="contact"
      className="w-full max-w-lg p-5 md:p-6 bg-white rounded-xl
      shadow-[0_8px_25px_rgba(0,0,0,0.15)]"
    >
      <h2 className="text-xl text-[#0e1527] font-bold mb-1">
        {t("title")}
      </h2>

      {/* Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <input
          type="text"
          name="name"
          placeholder={t("name")}
          aria-label={t("name")}
          className="w-full px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 border border-gray-200 rounded-lg bg-gray-50 outline-none focus:border-[#8981A4] focus:ring-2 focus:ring-[#8981A4]/20"
          required
        />

        <input
          type="email"
          name="email"
          placeholder={t("email")}
          aria-label={t("email")}
          className="w-full px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 border border-gray-200 rounded-lg bg-gray-50 outline-none focus:border-[#8981A4] focus:ring-2 focus:ring-[#8981A4]/20"
          required
        />
      </div>

      {/* Sector */}
      <select
        name="sector"
        aria-label={t("select")}
        defaultValue=""
        className="w-full px-3 py-2.5 mb-3 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 outline-none focus:border-[#8981A4]"
        required
      >
        <option value="" disabled>
          {t("select")}
        </option>
        <option value="steel">{t("steel sector")}</option>
        <option value="medical">{t("medical equipment sector")}</option>
      </select>

      {/* Message */}
      <textarea
        name="message"
        placeholder={t("message")}
        aria-label={t("message")}
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
          {t("submit")}
        </button>
        <p>{result}</p>
      </div>
    </form>
  );
};

export default ContactForm;