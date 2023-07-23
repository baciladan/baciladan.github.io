import { Github, Linkedin } from "react-bootstrap-icons";
import "./App.css";
import { ReactComponent as RoundLogo } from "./assets/Blank Space Logo (Round).svg";
import { Navbar } from "./components/Navbar/Navbar";
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
          { icon: <Github size={24} />, relativeUrl: "/github" },
          { icon: <Linkedin size={22} />, relativeUrl: "/linkedin" },
        ]}
      />
      <main style={{ height: "110vh" }}></main>
      <Footer
        copyrightText="Copyright &copy; [ / ] Studios | 2023"
        additionalCTAs={[
          { label: "GitHub", relativeUrl: "/" },
          { label: "LinkedIn", relativeUrl: "/" },
        ]}
      />
    </>
  );
}

export default App;
