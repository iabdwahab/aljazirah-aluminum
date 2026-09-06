"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const WORDPRESS_API_URL =
  "https://alumjaz.com/wp/wp-json/contact-form-7/v1/contact-forms/1069/feedback";

export default function ContactPage() {
  const t = useTranslations("Contact");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    const finalFormData = new FormData();
    finalFormData.append("full-name", data.name);
    finalFormData.append("email", data.email);
    finalFormData.append("phone", data.phone);
    finalFormData.append("message", data.message);
    finalFormData.append("_wpcf7_unit_tag", "wpcf7-f1069-p123-o1");

    try {
      const res = await fetch(WORDPRESS_API_URL, {
        method: "POST",
        body: finalFormData,
      });

      const responseData = await res.json();

      if (responseData.status === "mail_sent") {
        toast.success(t("form.successMessage"), { position: "top-right" });
        reset();
      } else {
        console.error("Error sending message:", responseData);
        toast.error(
          t("form.errors.submitFailed") + ` ${responseData.message ?? ""}`,
          { position: "top-right" },
        );
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      toast.error(t("form.errors.submitFailed"), { position: "top-right" });
    }
  }

  return (
    <main className="container mx-auto flex min-h-screen items-center justify-center px-4 py-24 pt-32">
      <div className="grid w-full max-w-6xl grid-cols-1 gap-12 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl md:grid-cols-2 dark:border-zinc-800 dark:bg-zinc-900">
        {/* Logo Section */}
        <div className="flex flex-col items-center justify-center border-b border-gray-100 bg-gray-50 p-12 max-md:hidden md:border-e md:border-b-0 dark:border-zinc-700 dark:bg-zinc-800">
          <Image
            src="/logo-white.svg"
            alt="Al Jazirah Aluminum Factory Logo"
            width={300}
            height={300}
            className="= w-4 transition-transform duration-300 hover:scale-105 md:w-64 dark:invert-0"
          />
        </div>

        {/* Form Section */}
        <div className="p-8 md:p-12">
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
              {t("title")}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {t("description")}
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
