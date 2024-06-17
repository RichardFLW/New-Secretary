// app/layout.js
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Poppins, Roboto } from "next/font/google";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import "../app/styles/globals.css"; // Import correct des styles globaux

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${poppins.className} ${roboto.className}`}>
      <body>
        <Navbar />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
