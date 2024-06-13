"use client";

import Link from "next/link";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Left Side - Logo */}
        <Link href="/" className={styles.logo}>
          <span style={{ fontWeight: "bold" }}>MH Secretary</span>
        </Link>

        {/* Right Side - Links */}
        <div className={`${styles.links} ${styles.desktopLinks}`}>
          <ul className={styles.linkList}>
            <li>
              <Link href="/myservices" className={styles.link}>
                Mes services
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.link}>
                À propos
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.link}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/devis" className={styles.link}>
                Devis
              </Link>
            </li>
            <li>
              <Link href="/login" className={styles.link}>
                <CgProfile className={styles.icon} />
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button className={styles.mobileMenuButton} onClick={handleMenuToggle}>
          {isMenuOpen ? (
            <FaTimes className={styles.icon} />
          ) : (
            <FaBars className={styles.icon} />
          )}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={styles.mobileLinks}>
            <ul className={styles.mobileLinkList}>
              <li>
                <Link href="/myservices" className={styles.link}>
                  Mes services
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.link}>
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.link}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/devis" className={styles.link}>
                  Devis
                </Link>
              </li>
              <li>
                <Link href="/login" className={styles.link}>
                  <CgProfile className={styles.icon} />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
