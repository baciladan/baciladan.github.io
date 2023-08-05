/*
 *    Copyright ©️ [ / ] Studios 2023
 */

import { v4 as uuidv4 } from "uuid";
import "./Footer.css";

export const Footer = ({ copyrightText = "", additionalCTAs = [] }: Props) => {
  return (
    <div className="footer-container">
      <div className="copyright-text">{copyrightText}</div>
      <div className="footer-ctas">
        <ul className="footer-ctas-container">
          {additionalCTAs.map(({ absoluteUrl, icon }) => (
            <a
              className="footer-cta-link"
              href={absoluteUrl}
              target="_blank"
              key={uuidv4()}
            >
              {icon}
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
    icon: JSX.Element;
    absoluteUrl: string;
  }[];
};
