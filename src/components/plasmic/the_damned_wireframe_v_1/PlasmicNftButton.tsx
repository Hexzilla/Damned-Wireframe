// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4Z3UMkZpk9iU1tNC7ianWh
// Component: OWTL5yNhla1
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: 9U02DESJlfv/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_the_damned_wireframe_v_1.module.css"; // plasmic-import: 4Z3UMkZpk9iU1tNC7ianWh/projectcss
import sty from "./PlasmicNftButton.module.css"; // plasmic-import: OWTL5yNhla1/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: 9vaXCj4SKKO/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: gfMcd0a2-6W/icon

export type PlasmicNftButton__VariantMembers = {
  showStartIcon: "showStartIcon";
  showEndIcon: "showEndIcon";
  isDisabled: "isDisabled";
  shape: "rounded" | "round" | "sharp";
  size: "compact" | "minimal";
  color:
    | "blue"
    | "green"
    | "yellow"
    | "red"
    | "sand"
    | "white"
    | "softBlue"
    | "softGreen"
    | "softYellow"
    | "softRed"
    | "softSand"
    | "clear"
    | "link";
};

export type PlasmicNftButton__VariantsArgs = {
  showStartIcon?: SingleBooleanChoiceArg<"showStartIcon">;
  showEndIcon?: SingleBooleanChoiceArg<"showEndIcon">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  shape?: SingleChoiceArg<"rounded" | "round" | "sharp">;
  size?: SingleChoiceArg<"compact" | "minimal">;
  color?: SingleChoiceArg<
    | "blue"
    | "green"
    | "yellow"
    | "red"
    | "sand"
    | "white"
    | "softBlue"
    | "softGreen"
    | "softYellow"
    | "softRed"
    | "softSand"
    | "clear"
    | "link"
  >;
};

type VariantPropType = keyof PlasmicNftButton__VariantsArgs;
export const PlasmicNftButton__VariantProps = new Array<VariantPropType>(
  "showStartIcon",
  "showEndIcon",
  "isDisabled",
  "shape",
  "size",
  "color"
);

export type PlasmicNftButton__ArgsType = {
  children?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  link?: string;
};

type ArgPropType = keyof PlasmicNftButton__ArgsType;
export const PlasmicNftButton__ArgProps = new Array<ArgPropType>(
  "children",
  "startIcon",
  "endIcon",
  "link"
);

export type PlasmicNftButton__OverridesType = {
  root?: p.Flex<"button">;
  freeBox?: p.Flex<"div">;
  startIconContainer?: p.Flex<"div">;
  contentContainer?: p.Flex<"div">;
  endIconContainer?: p.Flex<"div">;
};

export interface DefaultNftButtonProps extends pp.BaseButtonProps {
  shape?: SingleChoiceArg<"rounded" | "round" | "sharp">;
  size?: SingleChoiceArg<"compact" | "minimal">;
  color?: SingleChoiceArg<
    | "blue"
    | "green"
    | "yellow"
    | "red"
    | "sand"
    | "white"
    | "softBlue"
    | "softGreen"
    | "softYellow"
    | "softRed"
    | "softSand"
    | "clear"
    | "link"
  >;
}

export const defaultNftButton__Args: Partial<PlasmicNftButton__ArgsType> = {};

function PlasmicNftButton__RenderFunc(props: {
  variants: PlasmicNftButton__VariantsArgs;
  args: PlasmicNftButton__ArgsType;
  overrides: PlasmicNftButton__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultNftButton__Args, props.args);
  const $props = args;

  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin,
    hover_root: isRootHover
  };

  return (
    <p.Stack
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root,
        {
          [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.rootcolor_blue]: hasVariant(variants, "color", "blue"),
          [sty.rootcolor_clear]: hasVariant(variants, "color", "clear"),
          [sty.rootcolor_green]: hasVariant(variants, "color", "green"),
          [sty.rootcolor_link]: hasVariant(variants, "color", "link"),
          [sty.rootcolor_red]: hasVariant(variants, "color", "red"),
          [sty.rootcolor_sand]: hasVariant(variants, "color", "sand"),
          [sty.rootcolor_softBlue]: hasVariant(variants, "color", "softBlue"),
          [sty.rootcolor_softGreen]: hasVariant(variants, "color", "softGreen"),
          [sty.rootcolor_softRed]: hasVariant(variants, "color", "softRed"),
          [sty.rootcolor_softSand]: hasVariant(variants, "color", "softSand"),
          [sty.rootcolor_softYellow]: hasVariant(
            variants,
            "color",
            "softYellow"
          ),
          [sty.rootcolor_white]: hasVariant(variants, "color", "white"),
          [sty.rootcolor_yellow]: hasVariant(variants, "color", "yellow"),
          [sty.rootisDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),
          [sty.rootshape_round]: hasVariant(variants, "shape", "round"),
          [sty.rootshape_rounded]: hasVariant(variants, "shape", "rounded"),
          [sty.rootshape_rounded_showEndIcon]:
            hasVariant(variants, "showEndIcon", "showEndIcon") &&
            hasVariant(variants, "shape", "rounded"),
          [sty.rootshape_rounded_showStartIcon]:
            hasVariant(variants, "shape", "rounded") &&
            hasVariant(variants, "showStartIcon", "showStartIcon"),
          [sty.rootshape_rounded_size_compact]:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "shape", "rounded"),
          [sty.rootshape_sharp]: hasVariant(variants, "shape", "sharp"),
          [sty.rootshowEndIcon]: hasVariant(
            variants,
            "showEndIcon",
            "showEndIcon"
          ),
          [sty.rootshowEndIcon_size_compact]:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "showEndIcon", "showEndIcon"),
          [sty.rootshowEndIcon_size_compact_showStartIcon]:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "showStartIcon", "showStartIcon") &&
            hasVariant(variants, "showEndIcon", "showEndIcon"),
          [sty.rootshowStartIcon]: hasVariant(
            variants,
            "showStartIcon",
            "showStartIcon"
          ),
          [sty.rootsize_compact]: hasVariant(variants, "size", "compact"),
          [sty.rootsize_compact_shape_round]:
            hasVariant(variants, "shape", "round") &&
            hasVariant(variants, "size", "compact"),
          [sty.rootsize_compact_showStartIcon]:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "showStartIcon", "showStartIcon"),
          [sty.rootsize_minimal]: hasVariant(variants, "size", "minimal"),
          [sty.rootsize_minimal_color_link]:
            hasVariant(variants, "color", "link") &&
            hasVariant(variants, "size", "minimal")
        }
      )}
      data-plasmic-trigger-props={[
        triggerRootFocusVisibleWithinProps,
        triggerRootHoverProps
      ]}
    >
      {(triggers.hover_root ? true : true) ? (
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        />
      ) : null}
      {(
        hasVariant(variants, "showStartIcon", "showStartIcon") ? true : false
      ) ? (
        <div
          data-plasmic-name={"startIconContainer"}
          data-plasmic-override={overrides.startIconContainer}
          className={classNames(projectcss.all, sty.startIconContainer, {
            [sty.startIconContainercolor_blue]: hasVariant(
              variants,
              "color",
              "blue"
            ),
            [sty.startIconContainershape_rounded_showStartIcon]:
              hasVariant(variants, "shape", "rounded") &&
              hasVariant(variants, "showStartIcon", "showStartIcon"),
            [sty.startIconContainershowStartIcon]: hasVariant(
              variants,
              "showStartIcon",
              "showStartIcon"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <ChecksvgIcon
                className={classNames(projectcss.all, sty.svg__a26WI)}
                role={"img"}
              />
            ),

            value: args.startIcon,
            className: classNames(sty.slotTargetStartIcon, {
              [sty.slotTargetStartIconcolor_blue]: hasVariant(
                variants,
                "color",
                "blue"
              ),
              [sty.slotTargetStartIconcolor_clear]: hasVariant(
                variants,
                "color",
                "clear"
              ),
              [sty.slotTargetStartIconcolor_link]: hasVariant(
                variants,
                "color",
                "link"
              ),
              [sty.slotTargetStartIconcolor_softBlue]: hasVariant(
                variants,
                "color",
                "softBlue"
              ),
              [sty.slotTargetStartIconcolor_softGreen]: hasVariant(
                variants,
                "color",
                "softGreen"
              ),
              [sty.slotTargetStartIconcolor_softRed]: hasVariant(
                variants,
                "color",
                "softRed"
              ),
              [sty.slotTargetStartIconcolor_softSand]: hasVariant(
                variants,
                "color",
                "softSand"
              ),
              [sty.slotTargetStartIconcolor_softYellow]: hasVariant(
                variants,
                "color",
                "softYellow"
              ),
              [sty.slotTargetStartIconcolor_white]: hasVariant(
                variants,
                "color",
                "white"
              ),
              [sty.slotTargetStartIconcolor_yellow]: hasVariant(
                variants,
                "color",
                "yellow"
              ),
              [sty.slotTargetStartIconshowStartIcon]: hasVariant(
                variants,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })}
        </div>
      ) : null}

      <div
        data-plasmic-name={"contentContainer"}
        data-plasmic-override={overrides.contentContainer}
        className={classNames(projectcss.all, sty.contentContainer, {
          [sty.contentContainer___focusVisibleWithin]:
            triggers.focusVisibleWithin_root,
          [sty.contentContainerisDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),
          [sty.contentContainershape_rounded]: hasVariant(
            variants,
            "shape",
            "rounded"
          ),
          [sty.contentContainershowEndIcon]: hasVariant(
            variants,
            "showEndIcon",
            "showEndIcon"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Button",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildren___focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.slotTargetChildrencolor_blue]: hasVariant(
              variants,
              "color",
              "blue"
            ),
            [sty.slotTargetChildrencolor_clear]: hasVariant(
              variants,
              "color",
              "clear"
            ),
            [sty.slotTargetChildrencolor_green]: hasVariant(
              variants,
              "color",
              "green"
            ),
            [sty.slotTargetChildrencolor_link]: hasVariant(
              variants,
              "color",
              "link"
            ),
            [sty.slotTargetChildrencolor_red]: hasVariant(
              variants,
              "color",
              "red"
            ),
            [sty.slotTargetChildrencolor_sand]: hasVariant(
              variants,
              "color",
              "sand"
            ),
            [sty.slotTargetChildrencolor_softBlue]: hasVariant(
              variants,
              "color",
              "softBlue"
            ),
            [sty.slotTargetChildrencolor_softGreen]: hasVariant(
              variants,
              "color",
              "softGreen"
            ),
            [sty.slotTargetChildrencolor_softRed]: hasVariant(
              variants,
              "color",
              "softRed"
            ),
            [sty.slotTargetChildrencolor_softSand]: hasVariant(
              variants,
              "color",
              "softSand"
            ),
            [sty.slotTargetChildrencolor_softYellow]: hasVariant(
              variants,
              "color",
              "softYellow"
            ),
            [sty.slotTargetChildrencolor_white]: hasVariant(
              variants,
              "color",
              "white"
            ),
            [sty.slotTargetChildrencolor_yellow]: hasVariant(
              variants,
              "color",
              "yellow"
            ),
            [sty.slotTargetChildrenisDisabled]: hasVariant(
              variants,
              "isDisabled",
              "isDisabled"
            ),
            [sty.slotTargetChildrenshape_rounded]: hasVariant(
              variants,
              "shape",
              "rounded"
            ),
            [sty.slotTargetChildrenshowEndIcon]: hasVariant(
              variants,
              "showEndIcon",
              "showEndIcon"
            ),
            [sty.slotTargetChildrenshowStartIcon]: hasVariant(
              variants,
              "showStartIcon",
              "showStartIcon"
            ),
            [sty.slotTargetChildrensize_minimal]: hasVariant(
              variants,
              "size",
              "minimal"
            ),
            [sty.slotTargetChildrensize_minimal_color_link]:
              hasVariant(variants, "color", "link") &&
              hasVariant(variants, "size", "minimal")
          })
        })}
      </div>

      {(hasVariant(variants, "showEndIcon", "showEndIcon") ? true : false) ? (
        <div
          data-plasmic-name={"endIconContainer"}
          data-plasmic-override={overrides.endIconContainer}
          className={classNames(projectcss.all, sty.endIconContainer, {
            [sty.endIconContainercolor_white]: hasVariant(
              variants,
              "color",
              "white"
            ),
            [sty.endIconContainercolor_yellow]: hasVariant(
              variants,
              "color",
              "yellow"
            ),
            [sty.endIconContainershowEndIcon]: hasVariant(
              variants,
              "showEndIcon",
              "showEndIcon"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__rtOpf)}
                role={"img"}
              />
            ),

            value: args.endIcon,
            className: classNames(sty.slotTargetEndIcon, {
              [sty.slotTargetEndIconcolor_clear]: hasVariant(
                variants,
                "color",
                "clear"
              ),
              [sty.slotTargetEndIconcolor_link]: hasVariant(
                variants,
                "color",
                "link"
              ),
              [sty.slotTargetEndIconcolor_softBlue]: hasVariant(
                variants,
                "color",
                "softBlue"
              ),
              [sty.slotTargetEndIconcolor_softGreen]: hasVariant(
                variants,
                "color",
                "softGreen"
              ),
              [sty.slotTargetEndIconcolor_softRed]: hasVariant(
                variants,
                "color",
                "softRed"
              ),
              [sty.slotTargetEndIconcolor_softSand]: hasVariant(
                variants,
                "color",
                "softSand"
              ),
              [sty.slotTargetEndIconcolor_softYellow]: hasVariant(
                variants,
                "color",
                "softYellow"
              ),
              [sty.slotTargetEndIconcolor_white]: hasVariant(
                variants,
                "color",
                "white"
              ),
              [sty.slotTargetEndIconcolor_yellow]: hasVariant(
                variants,
                "color",
                "yellow"
              ),
              [sty.slotTargetEndIconshowEndIcon]: hasVariant(
                variants,
                "showEndIcon",
                "showEndIcon"
              )
            })
          })}
        </div>
      ) : null}
      {(triggers.hover_root ? true : true) ? (
        <Button className={classNames("__wab_instance", sty.button__e2Jqn)}>
          {triggers.hover_root ? "NFT #1" : "Button"}
        </Button>
      ) : null}
      {(triggers.hover_root ? true : false) ? (
        <Button className={classNames("__wab_instance", sty.button__qzFk7)}>
          {triggers.hover_root ? "NFT #3" : "Button"}
        </Button>
      ) : null}
      {(triggers.hover_root ? true : false) ? (
        <Button className={classNames("__wab_instance", sty.button___7JCk8)}>
          {triggers.hover_root ? "NFT #2" : "Button"}
        </Button>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.BaseButtonProps>(
  props: P,
  ref: pp.ButtonRef
) {
  const b = pp.useButton<P, typeof PlasmicNftButton>(
    PlasmicNftButton,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root"
    },

    ref
  );

  return b;
}

const PlasmicDescendants = {
  root: [
    "root",
    "freeBox",
    "startIconContainer",
    "contentContainer",
    "endIconContainer"
  ],
  freeBox: ["freeBox"],
  startIconContainer: ["startIconContainer"],
  contentContainer: ["contentContainer"],
  endIconContainer: ["endIconContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "button";
  freeBox: "div";
  startIconContainer: "div";
  contentContainer: "div";
  endIconContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNftButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNftButton__VariantsArgs;
    args?: PlasmicNftButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNftButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNftButton__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNftButton__ArgProps,
      internalVariantPropNames: PlasmicNftButton__VariantProps
    });

    return PlasmicNftButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNftButton";
  } else {
    func.displayName = `PlasmicNftButton.${nodeName}`;
  }
  return func;
}

export const PlasmicNftButton = Object.assign(
  // Top-level PlasmicNftButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    startIconContainer: makeNodeComponent("startIconContainer"),
    contentContainer: makeNodeComponent("contentContainer"),
    endIconContainer: makeNodeComponent("endIconContainer"),

    // Metadata about props expected for PlasmicNftButton
    internalVariantProps: PlasmicNftButton__VariantProps,
    internalArgProps: PlasmicNftButton__ArgProps,

    useBehavior
  }
);

export default PlasmicNftButton;
/* prettier-ignore-end */
