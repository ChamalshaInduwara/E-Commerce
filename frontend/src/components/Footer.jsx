import React from "react";
import { footerStyles } from "../assets/dummyStyles";
import { Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.topBorder}></div>
      {/* Pattern overlay */}
      <div className={footerStyles.patternOverlay}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="watchPattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="30"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="20"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="10"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            </pattern>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#watchPattern)"
          />
        </svg>
      </div>
      <div className={footerStyles.mainContainer}>
        <div className={footerStyles.newsletterSection}>
          <div className={footerStyles.newsletterContent}>
            <h3 className={footerStyles.newsletterTitle}>
              Timeless Elegance, Delivered
            </h3>
            <p className={footerStyles.newsletterText}>
              Subscribe to our newsletter for exclusive offers, new Collection
              announcements, and styling tips.
            </p>

            <div className={footerStyles.formContainer}>
              <input
                type="text"
                placeholder="Enter your email"
                className={footerStyles.emailInput}
              />
              <button className={footerStyles.subscribeButton}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main footer */}
        <div className={footerStyles.mainGrid}>
          <div className={footerStyles.brandSection}>
            <div className={footerStyles.brandContainer}>
              <div className={footerStyles.brandIconContainer}>
                <div className={footerStyles.brandIconPing}></div>
                <Clock className={footerStyles.brandIcon} />
              </div>
              <span className={footerStyles.brandName}>ChronoElite</span>
            </div>
            <p className={footerStyles.brandDescription}>
              Crafting timeless pieces for the discwening individual. Where
              precision meets elegance in every detail.
            </p>

            <div className={footerStyles.socialIconsContainer}>
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <a href="#" key={index} className={footerStyles.socialIcon}>
                  <Icon className={footerStyles.socialIconInner} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
