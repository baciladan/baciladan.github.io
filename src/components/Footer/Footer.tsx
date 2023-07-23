/*
 *    Copyright ©️ [ / ] Studios 2023
 */

import "./Footer.css";

export const Footer = ({ copyrightText = "", additionalCTAs = [] }: Props) => {
  return (
    <div className="footer-container">
      <div className="copyright-text">{copyrightText}</div>
      <div className="footer-ctas">
        <ul className="footer-ctas-container">
          {additionalCTAs.map((additionalCTA) => (
            <a
              className="footer-cta-link"
              href={additionalCTA.relativeUrl}
              target="_blank"
            >
              {additionalCTA.label}
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

type Props = {
  copyrightText: string;
  additionalCTAs?: {
    label: string;
    relativeUrl: string;
  }[];
};
