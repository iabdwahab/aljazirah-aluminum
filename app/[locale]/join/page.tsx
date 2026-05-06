"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function JoinPage() {
  const t = useTranslations("Join");

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    nationality: "",
    address: "",
    phone: "",
    email: "",
    expYears: "",
    specialization: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = t("form.errors.nameRequired");
    if (!formData.age.trim()) newErrors.age = t("form.errors.ageRequired");
    if (!formData.nationality.trim())
      newErrors.nationality = t("form.errors.nationalityRequired");
    if (!formData.address.trim())
      newErrors.address = t("form.errors.addressRequired");

    if (!formData.email.trim()) {
      newErrors.email = t("form.errors.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("form.errors.emailInvalid");
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t("form.errors.phoneRequired");
    } else if (!/^\+?[\d\s-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = t("form.errors.phoneInvalid");
    }

    if (!formData.expYears.trim())
      newErrors.expYears = t("form.errors.expYearsRequired");
    if (!formData.specialization.trim())
      newErrors.specialization = t("form.errors.specializationRequired");
    if (!formData.message.trim())
      newErrors.message = t("form.errors.messageRequired");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(false);

    if (validate()) {
      console.log("Job application data ready to submit:", formData);
      setIsSubmitted(true);
      // Reset form if desired
      // setFormData({ name: "", age: "", nationality: "", address: "", phone: "", email: "", expYears: "", specialization: "", message: "" });
    }
  };

  return (
    <main className="container mx-auto flex min-h-screen items-center justify-center px-4 py-24 pt-32">
      <div className="grid w-full max-w-6xl grid-cols-1 gap-4 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl md:grid-cols-2 dark:border-zinc-800 dark:bg-zinc-900">
        {/* Logo Section */}
        <div className="flex h-full flex-col items-center justify-center border-b border-gray-100 bg-gray-50 p-12 md:border-e md:border-b-0 dark:border-zinc-700 dark:bg-zinc-800">
          <Image
            src="/logo-white.svg"
            alt="Al Jazirah Aluminum Factory Logo"
            width={300}
            height={300}
            className="w-48 opacity-90 transition-transform duration-300 hover:scale-105 md:w-64"
          />
        </div>

        {/* Form Section */}
        <div className="p-8 md:px-6 md:py-12">
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
              {t("title")}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {t("description")}
            </p>
          </div>

          {isSubmitted && (
            <div className="mb-6 rounded-lg bg-green-50 p-4 text-center text-green-700 dark:bg-green-900/30 dark:text-green-400">
              {t("form.successMessage")}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {t("form.nameLabel")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full rounded-lg border bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:ring-2 focus:outline-none dark:bg-zinc-950 dark:text-white ${
                    errors.name
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:border-blue-500 focus:ring-blue-200 dark:border-zinc-800 dark:focus:ring-blue-900"
                  }`}
                  placeholder={t("form.namePlaceholder")}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Age Field */}
              <div>
                <label
                  htmlFor="age"
                  className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {t("form.ageLabel")}
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className={`w-full rounded-lg border bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:ring-2 focus:outline-none dark:bg-zinc-950 dark:text-white ${
                    errors.age
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:border-blue-500 focus:ring-blue-200 dark:border-zinc-800 dark:focus:ring-blue-900"
                  }`}
                  placeholder={t("form.agePlaceholder")}
                />
                {errors.age && (
                  <p className="mt-1 text-sm text-red-500">{errors.age}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Nationality Field */}
              <div>
                <label
                  htmlFor="nationality"
                  className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {t("form.nationalityLabel")}
                </label>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  className={`w-full rounded-lg border bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:ring-2 focus:outline-none dark:bg-zinc-950 dark:text-white ${
                    errors.nationality
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:border-blue-500 focus:ring-blue-200 dark:border-zinc-800 dark:focus:ring-blue-900"
                  }`}
                  placeholder={t("form.nationalityPlaceholder")}
                />
                {errors.nationality && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.nationality}
                  </p>
                )}
              </div>

              {/* Address Field */}
              <div>
                <label
                  htmlFor="address"
                  className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {t("form.addressLabel")}
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full rounded-lg border bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:ring-2 focus:outline-none dark:bg-zinc-950 dark:text-white ${
                    errors.address
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:border-blue-500 focus:ring-blue-200 dark:border-zinc-800 dark:focus:ring-blue-900"
                  }`}
                  placeholder={t("form.addressPlaceholder")}
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-red-500">{errors.address}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {t("form.emailLabel")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded-lg border bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:ring-2 focus:outline-none dark:bg-zinc-950 dark:text-white ${
                    errors.email
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:border-blue-500 focus:ring-blue-200 dark:border-zinc-800 dark:focus:ring-blue-900"
                  }`}
                  placeholder={t("form.emailPlaceholder")}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {t("form.phoneLabel")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full rounded-lg border bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:ring-2 focus:outline-none dark:bg-zinc-950 dark:text-white ${
                    errors.phone
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:border-blue-500 focus:ring-blue-200 dark:border-zinc-800 dark:focus:ring-blue-900"
                  }`}
                  placeholder={t("form.phonePlaceholder")}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Years of Experience Field */}
              <div>
                <label
                  htmlFor="expYears"
                  className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {t("form.expYearsLabel")}
                </label>
                <input
                  type="number"
                  id="expYears"
                  name="expYears"
                  min="0"
                  value={formData.expYears}
                  onChange={handleChange}
                  className={`w-full rounded-lg border bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:ring-2 focus:outline-none dark:bg-zinc-950 dark:text-white ${
                    errors.expYears
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:border-blue-500 focus:ring-blue-200 dark:border-zinc-800 dark:focus:ring-blue-900"
                  }`}
                  placeholder={t("form.expYearsPlaceholder")}
                />
                {errors.expYears && (
                  <p className="mt-1 text-sm text-red-500">{errors.expYears}</p>
                )}
              </div>

              {/* Specialization Field */}
              <div>
                <label
                  htmlFor="specialization"
                  className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {t("form.specializationLabel")}
                </label>
                <input
                  type="text"
                  id="specialization"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  className={`w-full rounded-lg border bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:ring-2 focus:outline-none dark:bg-zinc-950 dark:text-white ${
                    errors.specialization
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:border-blue-500 focus:ring-blue-200 dark:border-zinc-800 dark:focus:ring-blue-900"
                  }`}
                  placeholder={t("form.specializationPlaceholder")}
                />
                {errors.specialization && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.specialization}
                  </p>
                )}
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {t("form.messageLabel")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`w-full resize-none rounded-lg border bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:ring-2 focus:outline-none dark:bg-zinc-950 dark:text-white ${
                  errors.message
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-200 focus:border-blue-500 focus:ring-blue-200 dark:border-zinc-800 dark:focus:ring-blue-900"
                }`}
                placeholder={t("form.messagePlaceholder")}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-brand-gold-end w-full cursor-pointer rounded-lg px-4 py-3 font-medium text-black transition-colors duration-300 hover:opacity-80"
            >
              {t("form.submitButton")}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
