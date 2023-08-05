/*
 *    Copyright ©️ [ / ] Studios 2023
 */

import { useState } from "react";
import { List, XLg } from "react-bootstrap-icons";
import { v4 as uuidv4 } from "uuid";
import "./Navbar.css";

export const Navbar = ({
  interactiveLogo,
  navbarLinks,
  additionalCTAs,
}: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div
      className={
        !isMenuOpen
          ? "navbar-container"
          : "navbar-container navbar-container--active"
      }
    >
      <div className="navbar-main">
        <div className="interactive-logo">
          <a href={interactiveLogo.relativeUrl ?? "/"}>
            {interactiveLogo.icon}
          </a>
        </div>
        <div
          className={
            !isMenuOpen ? "navbar-items" : "navbar-items navbar-items--active"
          }
        >
          <ul className={"navbar-items-list"}>
            {navbarLinks.map(({ relativeUrl, label }) => (
              <li className="navbar-item" key={uuidv4()}>
                <a href={relativeUrl} className="navbar-link">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-mobile-control">
          {isMenuOpen ? (
            <XLg size={30} onClick={() => setIsMenuOpen(false)} />
          ) : (
            <List size={30} onClick={() => setIsMenuOpen(true)} />
          )}
        </div>
      </div>
      <div className="additional-ctas-container">
        <ul className="additional-ctas-list">
          {additionalCTAs.map(({ absoluteUrl, icon }) => (
            <li className="additional-cta" key={uuidv4()}>
              <a
                className="additional-cta-link"
                href={absoluteUrl}
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
    absoluteUrl?: string;
  }[];
};
