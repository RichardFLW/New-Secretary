// Footer.js
import Link from "next/link";
import SocialNetworks from "../SocialNetworks/SocialNetworks";

const Footer = () => {
  return (
    <footer
      className="bg-violet text-white shadow-md py-6 px-4 md:px-8"
      style={{ fontFamily: "var(--font-primary)" }}
    >
      {/* Contact Professionnel */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 mb-6">
        <h2 className="text-3xl font-bold">Contact Professionnel</h2>
        <button className="bg-white text-black py-2 px-4 rounded-md">
          Contactez-moi
        </button>
      </div>

      {/* Separator */}
      <div className="border-t border-white-700 my-10"></div>

      {/* Footer Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Paragraphe Lorem Ipsum */}
        <div className="md:col-span-2">
          <span className="bg-white text-black py-2 px-4 rounded-full font-semibold">
            MH Secretary
          </span>
          <p className="text-white-400 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
            malesuada.
          </p>
          <SocialNetworks />
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-2">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-white hover:text-gray-200 transition-colors"
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-white hover:text-white-200 transition-colors"
              >
                Confidentialité
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-white-400">
            Adresse: 123 Rue Fictive, Paris, France
          </p>
          <p className="text-white-400">Téléphone: +33 1 23 45 67 89</p>
          <p className="text-white-400">Email: info@mhsecretary.com</p>
        </div>
      </div>

      {/* Separator */}
      <div className="border-t border-white-700 my-10"></div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Copyright */}
        <div className="text-white-400 text-center md:text-left">
          &copy; 2024 MH Secretary. Tous droits réservés.
        </div>
        {/* Additional Links */}
        <div className="flex space-x-6">
          <Link
            href="/terms"
            className="text-white hover:text-gray-200 transition-colors"
          >
            Conditions générales
          </Link>
          <span className="text-white"> | </span>
          <Link
            href="/privacypolicy"
            className="text-white hover:text-gray-200 transition-colors"
          >
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
