import * as React from "react";
import {
  PlasmicStory,
  DefaultStoryProps
} from "./plasmic/the_damned_wireframe_v_1/PlasmicStory";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface StoryProps extends DefaultStoryProps {}

function Story_(props: StoryProps, ref: HTMLElementRefOf<"div">) {
  return <PlasmicStory root={{ ref }} {...props} />;
}

const Story = React.forwardRef(Story_);
export default Story;
