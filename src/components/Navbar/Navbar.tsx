/*
 *    Copyright ©️ [ / ] Studios 2023
 */

import "./Navbar.css";

export const Navbar = ({
  interactiveLogo,
  navbarLinks,
  additionalCTAs,
}: Props) => {
  return (
    <div className="navbar-container">
      <div className="interactive-logo">
        <a href={interactiveLogo.relativeUrl ?? "/"}>{interactiveLogo.icon}</a>
      </div>
      <div className="navbar-items">
        <ul className="navbar-items-list">
          {navbarLinks.map(({ relativeUrl, label }) => (
            <li className="navbar-item" key={label}>
              <a href={relativeUrl} className="navbar-link">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="additional-ctas-container">
        <ul className="additional-ctas-list">
          {additionalCTAs.map(({ relativeUrl, icon }) => (
            <li className="additional-cta">
              <a
                className="additional-cta-link"
                href={relativeUrl}
                key={relativeUrl}
                target="_blank"
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

type Props = {
  interactiveLogo: {
    icon: JSX.Element;
    relativeUrl?: string;
  };
  navbarLinks: {
    relativeUrl: string;
    label: string;
  }[];
  additionalCTAs: {
    icon: JSX.Element;
    relativeUrl?: string;
  }[];
};
