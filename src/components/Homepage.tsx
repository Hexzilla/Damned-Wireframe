import React, { useState, useEffect, useRef } from "react";
import {
  PlasmicHomepage,
  DefaultHomepageProps,
} from "./plasmic/the_damned_wireframe_v_1/PlasmicHomepage";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import "./Homepage.css";
import useWindowSize from "../hooks/useWindowSize";
import { Settings } from "./types";

export interface HomepageProps extends DefaultHomepageProps {}

// const defaultSettings = {
//   storyOpacity: 1,
//   leavesScale: 1,
//   overlayOpacity: 1,
//   lineTranslate: 0,
//   lineHeight: 0,
// } as Settings;

function Homepage_(props: HomepageProps, ref: HTMLElementRefOf<"div">) {
  //const leaveRef = useRef<HTMLImageElement>(null);
  const [scroll, setScroll] = useState<number>(0);
  //const [settings, setSettings] = useState<Settings>(defaultSettings);
  const { height } = useWindowSize();

  const handleScrollEvent = () => {
    setScroll(Math.max(window.scrollY, 0));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    const elements = document.getElementsByClassName("section");
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as any;
      element.style.zIndex = 100 - i;
    }
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScrollEvent);
  //   return () => {
  //     window.removeEventListener("scroll", handleScrollEvent);
  //   };
  // }, []);

  // useEffect(() => {
  //   const h = height / 1.5;
  //   setSettings({
  //     storyOpacity: scroll > 800 ? Math.max(1 - (scroll - h) / h, 0) : 1,
  //     leavesScale: Math.min(scroll / h + 1, 1.75),
  //     overlayOpacity: Math.min((scroll - h) / h, 1),
  //     lineHeight: Math.max(Math.min((scroll - h) / h, 1), 0),
  //     lineTranslate: Math.max(scroll - 1.5 * height, 0),
  //   });
  // }, [scroll, height]);

  // useEffect(() => {
  //   if (leaveRef.current) {
  //     const translate = 0; //-(100 * settings.leavesScale - 100);
  //     leaveRef.current.style.transform = `scale(${settings.leavesScale}) translate3d(0, ${translate}px, 0)`;

  //     if (settings.leavesScale === 1.75) {
  //       leaveRef.current.style.opacity = "" + settings.storyOpacity;
  //     }
  //   }
  //   // if (contentRef.current) {
  //   //   contentRef.current.style.opacity = "" + settings.storyOpacity;
  //   // }
  // }, [settings]);

  useEffect(() => {
    const h = height * 1.5;

    const elements = document.getElementsByClassName("section");
    const index = Math.floor(scroll / h);
    if (index >= 0 && index < elements.length) {
      const element = elements[index] as any;
      const position = (scroll % h) / h;
      
      const scale = Math.min(1 + position, 1.75);
      element.style.transform = `scale(${scale}) translate3d(0, 0, 0)`;

      const opacity = (position >= 0.7) ? ((1 - position) / 0.3) : 1;
      element.style.opacity = `${opacity}`;
    }
  }, [scroll, height]);

  return (
    <div className="container">
      <div className="scene">
        <div className="section">
          <img src="/images/nft/Damned.jpg" alt="Leaves Entrance" />
        </div>
        <div className="section">
          <img src="/images/nft/Lore.jpg" alt="Lore" />
        </div>
        <div className="section">
          <img src="/images/nft/Roadmap.jpg" alt="Roadmap" />
        </div>
        <div className="section">
          <img src="/images/nft/Limbo.jpg" alt="Limbo" />
        </div>
      </div>
    </div>
    // <div style={{ background: "black" }}>
    //   <div className="dik-banner-2d">
    //     <div className="banner-container">
    //       <img
    //         id="leaves-entrance"
    //         src="/images/branding/leaves-entrance-cropped.png"
    //         alt="Leaves Entrance"
    //         ref={leaveRef}
    //       />
    //     </div>
    //     <div className="banner-overlay" style={{ opacity: settings.overlayOpacity }}></div>
    //     <div id="content" ref={contentRef}>
    //       <PlasmicHomepage root={{ ref }} {...props} />
    //     </div>
    //     <div className="banner-container">
    //       <img className="nft" src="/images/nft/Damned.jpg" alt="The Damned" />
    //     </div>
    //   </div>
    //    <div className="rest-above">
    //     <section id="Lore">
    //       <img className="nft" src="/images/nft/Lore.jpg" alt="Lore" />
    //     </section>
    //     <section id="Roadmap">
    //       <img className="nft" src="/images/nft/Roadmap.jpg" alt="Roadmap" />
    //     </section>
    //     <section id="Limbo">
    //       <img className="nft" src="/images/nft/Limbo.jpg" alt="Limbo" />
    //     </section>
    //     <section id="Lust">
    //       <img className="nft" src="/images/nft/Lust.jpg" alt="Lust" />
    //     </section>
    //     <section id="Gluttony">
    //       <img className="nft" src="/images/nft/Gluttony.jpg" alt="Gluttony" />
    //     </section>
    //     <section id="Greed">
    //       <img className="nft" src="/images/nft/Greed.jpg" alt="Greed" />
    //     </section>
    //     <section id="Anger">
    //       <img className="nft" src="/images/nft/Anger.jpg" alt="Anger" />
    //     </section>
    //     <section id="Heresy">
    //       <img className="nft" src="/images/nft/Heresy.jpg" alt="Heresy" />
    //     </section>
    //     <section id="Violence">
    //       <img className="nft" src="/images/nft/Violence.jpg" alt="Violence" />
    //     </section>
    //     <section id="Fraud">
    //       <img className="nft" src="/images/nft/Fraud.jpg" alt="Fraud" />
    //     </section>
    //     <section id="Team">
    //       <img className="nft" src="/images/nft/Team.jpg" alt="Team" />
    //     </section>
    //   </div>
    //   <div style={{ minHeight: "4082px" }} />
    // </div>
  );
}

const Homepage = React.forwardRef(Homepage_);
export default Homepage;
