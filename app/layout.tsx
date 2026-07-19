import type { Metadata } from "next";
import { Manrope, Libre_Franklin } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const libre = Libre_Franklin({
  variable: "--font-libre",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Farmacia Mascardi | San Andrés de Giles", template: "%s | Farmacia Mascardi" },
  description: "Farmacia Mascardi en San Andrés de Giles. Atención profesional, medicamentos, dermocosmética, perfumería y cuidado personal.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/favicon.png`,
    shortcut: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/favicon.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${manrope.variable} ${libre.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
