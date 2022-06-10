import React, { useState, useEffect } from "react";
import {
  PlasmicHomepage,
  DefaultHomepageProps
} from "./plasmic/the_damned_wireframe_v_1/PlasmicHomepage";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import "./Homepage.css";
import MainSection from "./MainSection";
import useWindowSize from "../hooks/useWindowSize";
import { Settings } from "./types";

export interface HomepageProps extends DefaultHomepageProps {}

const defaultSettings = {
  logoOpacity: 1,
  leavesScale: 1,
  overlayOpacity: -1,
  lineTranslate: 0,
  lineHeight: 0,
} as Settings;

function Homepage_(props: HomepageProps, ref: HTMLElementRefOf<"div">) {
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
    setSettings({
      logoOpacity: Math.max(1 - scroll / h, 0),
      leavesScale: Math.min(scroll / h + 1, 1.75),
      overlayOpacity: Math.min((scroll - h) / h, 1),
      lineHeight: Math.max(Math.min((scroll - h) / h, 1), 0),
      lineTranslate: Math.max(scroll - 1.5 * height, 0),
    });
  }, [scroll, height]);

  return (
    <>
      <div className="dik-banner-2d">
        <MainSection settings={settings} />
        <PlasmicHomepage root={{ ref }} {...props} />;
      </div>
      <div style={{ minHeight: "1000px" }}>Hello World</div>
    </>
  )
}

const Homepage = React.forwardRef(Homepage_);
export default Homepage;
