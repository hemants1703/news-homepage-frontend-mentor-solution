// Styles
import "../styles/DesktopMain.css";

// Components
import SectionItem from "./SectionItem";
import BannerItems from "./BannerItems";

// Static Imports
import logo from "../../public/logo.svg";
import web3Desktop from "../assets/images/image-web-3-desktop.jpg";
import retroPC from "../assets/images/image-retro-pcs.jpg";
import laptops from "../assets/images/image-top-laptops.jpg";
import gaming from "../assets/images/image-gaming-growth.jpg";
import NavbarList from "../assets/content/NavbarList.json";

function DesktopMain() {
  return (
    <main className="desktop-main">
      <nav>
        <img src={logo} alt="logo-svg" id="logo" />
        <ul className="navlinks">
          {NavbarList.map(item => {
            return (
              <li>
                <a href="#">{item}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="parent">
        <div className="div1">
          <img src={web3Desktop} alt="hero-img" />
        </div>
        <div className="div2">The Bright Future of Web 3.0?</div>
        <div className="div3">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button>READ MORE</button>
        </div>
        <div className="div4">
          <div>
            <h1>New</h1>
            <BannerItems
              title={"Hydrogen VS Electric Cars"}
              content={"Will hydrogen-fluid cars ever catch up to EVs?"}
            />
            <span></span>
            <BannerItems
              title={"The Downsides of AI Artistry"}
              content={
                "What are the possible adverse effects of on-demand AI image generation"
              }
            />
            <span></span>
            <BannerItems
              title={"Is VC Funding Drying Up?"}
              content={
                "Private funding by VC firms is down 50% YOY. We take a look at what that means."
              }
            />
          </div>
        </div>
      </div>
      <section>
        <SectionItem
          image={retroPC}
          count="01"
          heading="Reviving Retro PCs"
          text="What happens when old PCs are given modern upgrades?"
        />
        <SectionItem
          image={laptops}
          count="02"
          heading="Top 10 Laptops of 2022"
          text="Our best picks for various needs and budgets."
        />
        <SectionItem
          image={gaming}
          count="03"
          heading="The Growth of Gaming"
          text="How the pandemic has sparked fresh opportunities."
        />
      </section>
    </main>
  );
}

export default DesktopMain;
