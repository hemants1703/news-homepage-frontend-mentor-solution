import { useRef } from "react";

// Stylesheet
import "../styles/MobileMain.css";

// Components
import BannerItems from "./BannerItems";
import SectionItem from "./SectionItem";

// Static Imports
import logo from "../../public/logo.svg";
import menubarIcon from "../assets/images/icon-menu.svg";
import closeIcon from "../assets/images/icon-menu-close.svg";
import web3Desktop from "../assets/images/image-web-3-desktop.jpg";
import retroPC from "../assets/images/image-retro-pcs.jpg";
import laptops from "../assets/images/image-top-laptops.jpg";
import gaming from "../assets/images/image-gaming-growth.jpg";
import NavbarList from "../assets/content/NavbarList.json";
import heroMobile from "../assets/images/image-web-3-mobile.jpg";

const MobileMain = () => {
  const menuRef = useRef(null);
  const closeRef = useRef(null);
  const navRef = useRef(null);
  const mainRef = useRef(null);

  const toggleMenu = () => {
    const menu = menuRef.current;
    const close = closeRef.current;
    const navbar = navRef.current;
    const main = mainRef.current;

    if (menu.style.display === "block") {
      menu.style.display = "none";
      close.style.display = "block";
      navbar.style.display = "flex";
      main.style.background =
        "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))";
    } else {
      menu.style.display = "block";
      close.style.display = "none";
      navbar.style.display = "none";
      main.style.background = "";
    }
  };
  return (
    <div className="mobile-website" ref={mainRef}>
      <div className="mobile-page">
        <ul className="navlinks" ref={navRef}>
          <img
            src={closeIcon}
            alt="close-icon"
            ref={closeRef}
            style={{ display: "none" }}
            className="close-icon"
            onClick={toggleMenu}
          />
          {NavbarList.map((item) => {
            return (
              <li>
                <a href="#">{item}</a>
              </li>
            );
          })}
        </ul>
        <main className="mobile-main">
          <nav>
            <img src={logo} alt="logo" />
            <img
              src={menubarIcon}
              alt="menubar-icon"
              ref={menuRef}
              style={{ display: "block" }}
              className="menu-icon"
              onClick={toggleMenu}
            />
          </nav>
          <section className="hero-section">
            <img src={heroMobile} alt="hero-img" className="hero-img" />
            <article>
              <h2>The Bright Future of Web 3.0?</h2>
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button>READ MORE</button>
            </article>
          </section>
          <section className="banner-section">
            <h2>New</h2>
            <BannerItems
              title={"Hydrogen VS Electric Cars"}
              content={"Will hydrogen-fueled cars ever catch upto EVs?"}
              className="banner"
            />
            <span></span>
            <BannerItems
              title={"The Downsides of Al Artistry"}
              content={
                "What are the possible adverse effects of AI image generation?"
              }
              className="banner"
            />
            <span></span>
            <BannerItems
              title={"Is VS Funding Drying Up?"}
              content={
                "Private funding by VC firms is down 50% take a look at what that means"
              }
              className="banner"
            />
          </section>
          <section className="section-items">
              <SectionItem image={retroPC} count={"01"} heading={"Reviving Retro PCs"} text={"What happens when old PCs are given modern upgrades?"} />
              <SectionItem image={laptops} count={"02"} heading={"Top 10 Laptops of 2022"} text={"Our best picks for various needs and budgets."} />
              <SectionItem image={gaming} count={"03"} heading={"The Growth of Gaming"} text={"How the pandemic has sparked fresh opportunities."}/>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MobileMain;
