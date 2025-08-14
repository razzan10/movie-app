import { footer } from "framer-motion/client";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p className="footer">
        &copy; {currentYear} <span> Razzan Rinda</span>. All Rights reserved
      </p>
    </footer>
  );
};

export default Footer;
