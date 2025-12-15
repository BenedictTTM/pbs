import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Prince Boakye-Sekyerehene | Lecturer, Computer Science",
  description: "Personal academic website for Prince Boakye-Sekyerehene, Distinguished Lecturer in Computer Science at the University of Ghana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${merriweather.variable} font-sans antialiased bg-pbs-background text-pbs-text-primary overflow-x-hidden`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
