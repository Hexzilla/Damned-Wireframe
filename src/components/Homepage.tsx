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

const defaultSettings = {
  storyOpacity: 1,
  leavesScale: 1,
  overlayOpacity: 1,
  lineTranslate: 0,
  lineHeight: 0,
} as Settings;

function Homepage_(props: HomepageProps, ref: HTMLElementRefOf<"div">) {
  const contentRef = useRef<HTMLDivElement>(null);
  const leaveRef = useRef<HTMLImageElement>(null);
  const [scroll, setScroll] = useState<number>(0);
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const { height } = useWindowSize();

  const handleScrollEvent = () => {
    setScroll(Math.max(window.scrollY, 0));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  useEffect(() => {
    const h = height / 1.5;
    console.log('~~~~~~~~~~~', scroll, h, Math.max(1 - scroll / h, 0))
    setSettings({
      storyOpacity: scroll > 800 ? Math.max(1 - (scroll - h) / h, 0) : 1,
      leavesScale: Math.min(scroll / h + 1, 1.75),
      overlayOpacity: Math.min((scroll - h) / h, 1),
      lineHeight: Math.max(Math.min((scroll - h) / h, 1), 0),
      lineTranslate: Math.max(scroll - 1.5 * height, 0),
    });
  }, [scroll, height]);

  useEffect(() => {
    if (leaveRef.current) {
      const translate = -(100 * settings.leavesScale - 100);
      leaveRef.current.style.transform = `scale(${settings.leavesScale}) translate3d(0, ${translate}px, 0)`;
    }
    if (contentRef.current) {
      contentRef.current.style.opacity = "" + settings.storyOpacity;
    }
  }, [settings])

  return (
    <div style={{background: 'black'}}>
      <div className="dik-banner-2d">
        <div className="banner-container">
          <img
            id="leaves-entrance"
            src="/images/branding/leaves-entrance-cropped.png"
            alt="Leaves Entrance"
            ref={leaveRef}
          />
        </div>
        <div className="banner-overlay" style={{ opacity: settings.overlayOpacity }}></div>
        <div id="content" ref={contentRef}>
          <PlasmicHomepage root={{ ref }} {...props} />
        </div>
      </div>
      <div className="rest-above">
        <section id="Damned">
          <img className="nft" src="/images/nft/Damned.jpg" alt="The Damned" />
        </section>
        <section id="Lore">
          <img className="nft" src="/images/nft/Lore.jpg" alt="Lore" />
        </section>
        <section id="Roadmap">
          <img className="nft" src="/images/nft/Roadmap.jpg" alt="Roadmap" />
        </section>
        <section id="Limbo">
          <img className="nft" src="/images/nft/Limbo.jpg" alt="Limbo" />
        </section>
        <section id="Lust">
          <img className="nft" src="/images/nft/Lust.jpg" alt="Lust" />
        </section>
        <section id="Gluttony">
          <img className="nft" src="/images/nft/Gluttony.jpg" alt="Gluttony" />
        </section>
        <section id="Greed">
          <img className="nft" src="/images/nft/Greed.jpg" alt="Greed" />
        </section>
        <section id="Anger">
          <img className="nft" src="/images/nft/Anger.jpg" alt="Anger" />
        </section>
        <section id="Heresy">
          <img className="nft" src="/images/nft/Heresy.jpg" alt="Heresy" />
        </section>
        <section id="Violence">
          <img className="nft" src="/images/nft/Violence.jpg" alt="Violence" />
        </section>
        <section id="Fraud">
          <img className="nft" src="/images/nft/Fraud.jpg" alt="Fraud" />
        </section>        
        <section id="Team">
          <img className="nft" src="/images/nft/Team.jpg" alt="Team" />
        </section>
      </div>
    </div>
  );
}

const Homepage = React.forwardRef(Homepage_);
export default Homepage;
