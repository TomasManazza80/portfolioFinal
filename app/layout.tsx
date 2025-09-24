import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tomas Manazza - Fullstack Developer",
  description:
    "Full Stack Developer y CEO de Empty_Development. Apasionado por crear soluciones digitales innovadoras y eficientes.",
  generator: "Next.js",
  applicationName: "Tomas Manazza",
  keywords: [
    "tomas manazza",
    "Tomas Manazza",
    "full stack developer",
    "developer",
    "full stack",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Tomas Manazza - Fullstack Developer",
    description:
      "Full Stack Developer y CEO de Empty_Development. Apasionado por crear soluciones digitales innovadoras y eficientes.",
    siteName: "www.tomasmanazza.com",
    images: [
      {
        url: "https://i.postimg.cc/SKD5TpwV/Whats-App-Image-2025-09-24-at-7-54-20-PM.jpg",
        width: 1200,
        height: 630,
        alt: "Tomas Manazza - Full Stack Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomas Manazza - Full Stack Dev",
    description:
      "Full Stack Developer y CEO de Empty_Development. Apasionado por crear soluciones digitales innovadoras y eficientes.",
    creator: "tomas manazza",
    creatorId: "1243720976552144897",
    images: [
      "https://i.postimg.cc/SKD5TpwV/Whats-App-Image-2025-09-24-at-7-54-20-PM.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "",
  // },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>Tomas Manazza - Fullstack Developer</title>
      </head>
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}