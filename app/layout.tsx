import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/Header";
import Footer from "@/components/footer/Footer";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ألمنيوم الجزيرة",
  description:
    "مواكبة أحدث التطورات التي تتناسب مع المواصفات الخليجية. ولذلك يعد مصنع ألمنيوم الجزيرة من أهم المصانع التي يمكن الوثوق بها لالتزامها بالدرجة العالية من التصنيع والتركيب والتسليم ومن ثم الخدمة. لذا مازال مصنع ألمنيوم الجزيرة من أكبر الرواد في تلك الصناعة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} relative antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
