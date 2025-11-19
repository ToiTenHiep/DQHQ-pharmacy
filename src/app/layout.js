import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";

import NavbarWrapper from "@/components/ui/navbar/NavbarWrapper"; // <- default import
import Footer from "@/components/ui/footer";
import RobotWrapper from "@/components/ui/RobotWrapper"; // <- default import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DQHQ Pharmacy",
  description: "Website nhà thuốc DQHQ – Sức khỏe của bạn là sứ mệnh của chúng tôi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-[Montserrat]">
        <NavbarWrapper />
        {children}
        <RobotWrapper />
        <Footer />
      </body>
    </html>
  );
}
