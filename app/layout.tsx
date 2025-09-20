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
  title: "Tomas Manazza - Full Stack Dev",
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
    title: "Tomas Manazza - Full Stack Dev",
    description:
      "Full Stack Developer y CEO de Empty_Development. Apasionado por crear soluciones digitales innovadoras y eficientes.",
    siteName: "www.tomasmanazza.com",
    images: [
      {
        url: "https://user-images.githubusercontent.com/84178696/228620835-e3cc5c9b-72fc-4f54-a628-407ef7b650f5.png",
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
      "https://user-images.githubusercontent.com/84178696/228620835-e3cc5c9b-72fc-4f54-a628-407ef7b650f5.png",
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
  //   google: "Tviee0mVRz9tlPLOv5_waP-rNS3m0y4K2mbqDHSqPJE",
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
        <title>Tomas Manazza - Full Stack Developer</title>
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