import * as React from "react";
import {
  PlasmicMainMenu,
  DefaultMainMenuProps,
} from "./plasmic/the_damned_wireframe_v_1/PlasmicMainMenu";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface MainMenuProps extends DefaultMainMenuProps {}

function MainMenu_(props: MainMenuProps, ref: HTMLElementRefOf<"div">) {
  const scrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset,
        behavior: "smooth",
      });
    }
  }
  const handleLoreButton = (): void => {
    console.log("handleLoreButton");
    scrollTo("Lore");
  };

  return (
    <PlasmicMainMenu
      root={{ ref }}
      {...props}
      loreButton={{ onClick: handleLoreButton }}
    />
  );
}

const MainMenu = React.forwardRef(MainMenu_);
export default MainMenu;
