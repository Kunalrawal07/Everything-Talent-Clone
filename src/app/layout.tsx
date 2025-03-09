import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./Theme/ThemeContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "About | Free AI-Powerd ATS & Tech Assesment Insight | Everything Talent",
  description: "This Page is Clone of Everything Talent About Page and Clone by Kunal Rawal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
  <ThemeProvider>
          {children}
        </ThemeProvider>
              </body>
    </html>
  );
}
