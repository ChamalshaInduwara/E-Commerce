import React from 'react'
import { footerStyles } from '../assets/dummyStyles';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
        <div className={footerStyles.topBorder}>
        </div>
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
                    Subscribe to our newsletter for exclusive offers, new Collection announcements, and styling tips.
                </p>

            </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer