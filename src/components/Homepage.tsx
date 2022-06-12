import React, { useState, useEffect, useRef } from "react";
import {
  PlasmicHomepage,
  DefaultHomepageProps,
} from "./plasmic/the_damned_wireframe_v_1/PlasmicHomepage";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import "./Homepage.css";
import useWindowSize from "../hooks/useWindowSize";

export interface HomepageProps extends DefaultHomepageProps {}

function Homepage_(props: HomepageProps, ref: HTMLElementRefOf<"div">) {
  const [scroll, setScroll] = useState<number>(0);
  const { height } = useWindowSize();

  const handleScrollEvent = () => {
    setScroll(Math.max(window.scrollY, 0));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    const elements = document.getElementsByClassName("section");
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as any;
      element.style.zIndex = -1 - i;
    }
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  useEffect(() => {
    const h = height;

    const elements = document.getElementsByClassName("section");
    const index = Math.floor(scroll / h);
    /*for (let i = 0; i < elements.length; i++) {
      if (i !== index) {
        const element = elements[i] as any;
        element.style.opacity = `${0}`;
      }
    }*/
    if (index >= 0 && index < elements.length) {
      const position = (scroll % h) / h;
      if (position >= 0.2) {
        if (index >= 1) {
          const prev = elements[index - 1] as any;
          prev.style.opacity = `${0}`;
        }
      }

      const element = elements[index] as any;
      const scale = (position > 0.1) ? Math.min(1 + position - 0.1, 1.75) : 1;
      element.style.transform = `scale(${scale}) translate3d(0, 0, 0)`;

      const opacity = (position >= 0.5) ? ((1 - position) / 0.5) : 1;
      element.style.opacity = `${opacity}`;
    }
  }, [scroll, height]);

  return (
    <div className="container">
      <div className="scene">
        <PlasmicHomepage root={{ ref }} {...props} />
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
        <div className="section">
          <img src="/images/nft/Lust.jpg" alt="Lust" />
        </div>
        <div className="section">
          <img src="/images/nft/Gluttony.jpg" alt="Gluttony" />
        </div>
        <div className="section">
          <img src="/images/nft/Greed.jpg" alt="Greed" />
        </div>
        <div className="section">
          <img src="/images/nft/Anger.jpg" alt="Anger" />
        </div>
        <div className="section">
          <img src="/images/nft/Heresy.jpg" alt="Heresy" />
        </div>
        <div className="section">
          <img src="/images/nft/Violence.jpg" alt="Violence" />
        </div>
        <div className="section">
          <img src="/images/nft/Fraud.jpg" alt="Fraud" />
        </div>
        <div className="section">
          <img src="/images/nft/Team.jpg" alt="Team" />
        </div>
      </div>
    </div>
  );
}

const Homepage = React.forwardRef(Homepage_);
export default Homepage;
