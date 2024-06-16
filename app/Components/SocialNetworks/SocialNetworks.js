import styles from "./SocialNetworks.module.css";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialNetworkd() {
  return (
    <div className={styles.socialLinks}>
      <Link className={styles.socialLink} href="/">
        <FaFacebook size={24} />
      </Link>

      <Link className={styles.socialLink} href="/">
        <FaXTwitter size={24} />
      </Link>

      <Link className={styles.socialLink} href="/">
        <FaInstagram size={24} />
      </Link>
    </div>
  );
}
