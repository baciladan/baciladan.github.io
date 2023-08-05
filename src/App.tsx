/*
 *    Copyright ©️ [ / ] Studios 2023
 */

import { Github, Linkedin } from "react-bootstrap-icons";
import "./App.css";
import { ReactComponent as RoundLogo } from "./assets/Blank Space Logo (Round).svg";
import { Navbar } from "./components/Navbar/Navbar";
import { CodeEditor } from "./components/CodeEditor/CodeEditor";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar
        interactiveLogo={{ relativeUrl: "/", icon: <RoundLogo /> }}
        navbarLinks={[
          { relativeUrl: "/", label: "Home" },
          { relativeUrl: "#about", label: "About" },
          { relativeUrl: "#projects", label: "Projects" },
        ]}
        additionalCTAs={[
          {
            icon: <Github size={24} />,
            absoluteUrl: "https://github.com/baciladan",
          },
          {
            icon: <Linkedin size={22} />,
            absoluteUrl: "https://www.linkedin.com/in/dan-bacila/",
          },
        ]}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 180px)",
        }}
      >
        <CodeEditor />
      </div>
      <Footer
        copyrightText="Copyright &copy; [ / ] Studios | 2023"
        additionalCTAs={[
          {
            icon: <Github size={24} />,
            absoluteUrl: "https://github.com/baciladan",
          },
          {
            icon: <Linkedin size={22} />,
            absoluteUrl: "https://www.linkedin.com/in/dan-bacila/",
          },
        ]}
      />
    </>
  );
}

export default App;
