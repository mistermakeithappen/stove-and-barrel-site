import type { Metadata } from "next";
import { Abril_Fatface, Arapey, Bebas_Neue } from "next/font/google";
import "./globals.css";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-abril",
});

const arapey = Arapey({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-arapey",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Stove & Barrel | A Man's Mercantile",
  description:
    "Premium beard care born from the art of the barrel. Forged in tradition, crafted for the modern man.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
          {`
            ::selection {
              background-color: #ccb186;
              color: #302d33;
            }
            ::-webkit-scrollbar {
              width: 8px;
            }
            ::-webkit-scrollbar-track {
              background-color: #141414;
            }
            ::-webkit-scrollbar-thumb {
              background-color: #302d33;
              border-radius: 4px;
            }
            ::-webkit-scrollbar-thumb:hover {
              background-color: #a6a6a6;
            }
          `}
        </style>
      </head>
      <body className={`${abril.variable} ${arapey.variable} ${bebasNeue.variable} font-arapey bg-beige text-charcoal`}>
        {children}
      </body>
    </html>
  );
}
