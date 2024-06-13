// app/layout.js
import { Poppins, Roboto } from "next/font/google";
import Navbar from "../app/Components/Navbar";
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
      </body>
    </html>
  );
}
