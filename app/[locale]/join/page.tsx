"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface JoinFormData {
  name: string;
  age: string;
  nationality: string;
  address: string;
  phone: string;
  email: string;
  expYears: string;
  specialization: string;
  message: string;
}

const WORDPRESS_JOIN_FORM_URL =
  process.env.NEXT_PUBLIC_WP_JOIN_FORM_URL ||
  "https://alumjaz.com/wp/wp-json/contact-form-7/v1/contact-forms/1089/feedback";

export default function JoinPage() {
  const t = useTranslations("Join");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<JoinFormData>({
    defaultValues: {
      name: "",
      age: "",
      nationality: "",
      address: "",
      phone: "",
      email: "",
      expYears: "",
      specialization: "",
      message: "",
    },
  });

  async function onSubmit(data: JoinFormData) {
    const finalFormData = new FormData();
    finalFormData.append("full-name", data.name);
    finalFormData.append("age", data.age);
    finalFormData.append("nationality", data.nationality);
    finalFormData.append("address", data.address);
    finalFormData.append("phone", data.phone);
    finalFormData.append("email", data.email);
    finalFormData.append("exp-years", data.expYears);
    finalFormData.append("specialization", data.specialization);
    finalFormData.append("message", data.message);
    finalFormData.append("_wpcf7_unit_tag", "wpcf7-f1089-p123-o1");

    try {
      const res = await fetch(WORDPRESS_JOIN_FORM_URL, {
        method: "POST",
        body: finalFormData,
      });

      const responseData = await res.json();

      if (responseData.status === "mail_sent") {
        toast.success(t("form.successMessage"), { position: "top-right" });
        reset();
      } else {
        console.error("Error sending application:", responseData);
        toast.error(
          t("form.errors.submitFailed") + ` ${responseData.message ?? ""}`,
          { position: "top-right" },
        );
      }
    } catch (error) {
      console.error("Join form submission error:", error);
      toast.error(t("form.errors.submitFailed"), { position: "top-right" });
    }
  }

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

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
                  placeholder={t("form.namePlaceholder")}
                  className={`w-full rounded-lg border bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:ring-2 focus:outline-none dark:bg-zinc-950 dark:text-white ${
                    errors.name
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:border-blue-500 focus:ring-blue-200 dark:border-zinc-800 dark:focus:ring-blue-900"
                  }`}
                  {...register("name", {
                    required: t("form.errors.nameRequired"),
                  })}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
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
                  min={18}
                  placeholder={t("form.agePlaceholder")}
                  className={`w-full rounded-lg border bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:ring-2 focus:outline-none dark:bg-zinc-950 dark:text-white ${
                    errors.age
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:border-blue-500 focus:ring-blue-200 dark:border-zinc-800 dark:focus:ring-blue-900"
                  }`}
                  {...register("age", {
                    required: t("form.errors.ageRequired"),
                  })}
                />
                {errors.age && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.age.message}
                  </p>
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
                  placeholder={t("form.nationalityPlaceholder")}
                  className={`w-full rounded-lg border bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:ring-2 focus:outline-none dark:bg-zinc-950 dark:text-white ${
                    errors.nationality
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:border-blue-500 focus:ring-blue-200 dark:border-zinc-800 dark:focus:ring-blue-900"
                  }`}
                  {...register("nationality", {
                    required: t("form.errors.nationalityRequired"),
                  })}
                />
                {errors.nationality && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.nationality.message}
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
                  placeholder={t("form.addressPlaceholder")}
                  className={`w-full rounded-lg border bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:ring-2 focus:outline-none dark:bg-zinc-950 dark:text-white ${
                    errors.address
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:border-blue-500 focus:ring-blue-200 dark:border-zinc-800 dark:focus:ring-blue-900"
                  }`}
                  {...register("address", {
                    required: t("form.errors.addressRequired"),
                  })}
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.address.message}
                  </p>
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
                  placeholder={t("form.emailPlaceholder")}
                  className={`w-full rounded-lg border bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:ring-2 focus:outline-none dark:bg-zinc-950 dark:text-white ${
                    errors.email
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:border-blue-500 focus:ring-blue-200 dark:border-zinc-800 dark:focus:ring-blue-900"
                  }`}
                  {...register("email", {
                    required: t("form.errors.emailRequired"),
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: t("form.errors.emailInvalid"),
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
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
                  dir="ltr"
                  placeholder={t("form.phonePlaceholder")}
                  className={`w-full rounded-lg border bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:ring-2 focus:outline-none dark:bg-zinc-950 dark:text-white ${
                    errors.phone
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:border-blue-500 focus:ring-blue-200 dark:border-zinc-800 dark:focus:ring-blue-900"
                  }`}
                  {...register("phone", {
                    required: t("form.errors.phoneRequired"),
                    pattern: {
                      value: /^\+?[\d\s-]{7,15}$/,
                      message: t("form.errors.phoneInvalid"),
                    },
                  })}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phone.message}
                  </p>
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
                  min="0"
                  placeholder={t("form.expYearsPlaceholder")}
                  className={`w-full rounded-lg border bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:ring-2 focus:outline-none dark:bg-zinc-950 dark:text-white ${
                    errors.expYears
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:border-blue-500 focus:ring-blue-200 dark:border-zinc-800 dark:focus:ring-blue-900"
                  }`}
                  {...register("expYears", {
                    required: t("form.errors.expYearsRequired"),
                  })}
                />
                {errors.expYears && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.expYears.message}
                  </p>
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
                  placeholder={t("form.specializationPlaceholder")}
                  className={`w-full rounded-lg border bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:ring-2 focus:outline-none dark:bg-zinc-950 dark:text-white ${
                    errors.specialization
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:border-blue-500 focus:ring-blue-200 dark:border-zinc-800 dark:focus:ring-blue-900"
                  }`}
                  {...register("specialization", {
                    required: t("form.errors.specializationRequired"),
                  })}
                />
                {errors.specialization && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.specialization.message}
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
                rows={4}
                placeholder={t("form.messagePlaceholder")}
                className={`w-full resize-none rounded-lg border bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:ring-2 focus:outline-none dark:bg-zinc-950 dark:text-white ${
                  errors.message
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-200 focus:border-blue-500 focus:ring-blue-200 dark:border-zinc-800 dark:focus:ring-blue-900"
                }`}
                {...register("message", {
                  required: t("form.errors.messageRequired"),
                })}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-brand-gold-end w-full cursor-pointer rounded-lg px-4 py-3 font-medium text-black transition-colors duration-300 hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? t("form.submitting") : t("form.submitButton")}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
