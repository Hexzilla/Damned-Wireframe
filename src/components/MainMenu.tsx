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

  return (
    <PlasmicMainMenu
      root={{ ref }}
      {...props}
      loreButton={{ onClick: () => scrollTo("Lore") }}
      roadmapButton={{ onClick: () => scrollTo("Roadmap") }}
      limboButton={{ onClick: () => scrollTo("Limbo") }}
      lustButton={{ onClick: () => scrollTo("Lust") }}
      gluttonyButton={{ onClick: () => scrollTo("Gluttony") }}
      greedButton={{ onClick: () => scrollTo("Greed") }}
      angerButton={{ onClick: () => scrollTo("Anger") }}
      heresyButton={{ onClick: () => scrollTo("Heresy") }}
      violenceButton={{ onClick: () => scrollTo("Violence") }}
      fraudButton={{ onClick: () => scrollTo("Fraud") }}
      teamButton={{ onClick: () => scrollTo("Team") }}
    />
  );
}

const MainMenu = React.forwardRef(MainMenu_);
export default MainMenu;
