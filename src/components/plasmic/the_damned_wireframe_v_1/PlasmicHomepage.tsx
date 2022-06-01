// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4Z3UMkZpk9iU1tNC7ianWh
// Component: kWxJ1fA34dtB
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

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
import { Reveal } from "@plasmicpkgs/react-awesome-reveal"; // plasmic-import: R6s1FdhksG/codeComponent

import { useScreenVariants as useScreenVariantssKPzWh1XRaeiy } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: sKPzWh1XRaeiy/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_the_damned_wireframe_v_1.module.css"; // plasmic-import: 4Z3UMkZpk9iU1tNC7ianWh/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: kWxJ1fA34dtB/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: 9vaXCj4SKKO/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: gfMcd0a2-6W/icon
import imageNjSfrrcy2 from "./images/image.png"; // plasmic-import: njSfrrcy2/picture

export type PlasmicHomepage__VariantMembers = {
  synced: "synced";
};

export type PlasmicHomepage__VariantsArgs = {
  synced?: SingleBooleanChoiceArg<"synced">;
};

type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>(
  "synced"
);

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<"div">;
  menu?: p.Flex<"div">;
  spacer?: p.Flex<"div">;
  profile?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
};

export interface DefaultHomepageProps {
  synced?: SingleBooleanChoiceArg<"synced">;
  className?: string;
}

export const defaultHomepage__Args: Partial<PlasmicHomepage__ArgsType> = {};

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultHomepage__Args, props.args);
  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantssKPzWh1XRaeiy()
  });

  return (
    <React.Fragment>
      {}
      {}

      <p.Stack
        as={"div"}
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        hasGap={true}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          sty.root,
          { [sty.rootsynced]: hasVariant(variants, "synced", "synced") }
        )}
      >
        <div
          data-plasmic-name={"header"}
          data-plasmic-override={overrides.header}
          className={classNames(projectcss.all, sty.header)}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"menu"}
            data-plasmic-override={overrides.menu}
            hasGap={true}
            className={classNames(projectcss.all, sty.menu)}
          >
            <Button
              className={classNames("__wab_instance", sty.button__tQeMn)}
              size={"compact" as const}
            >
              {"Logo"}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__ihuIo)}
              size={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? ("compact" as const)
                  : hasVariant(globalVariants, "screen", "smallScreen")
                  ? ("minimal" as const)
                  : ("compact" as const)
              }
            >
              {"Lore"}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__qRPB)}
              size={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? ("compact" as const)
                  : hasVariant(globalVariants, "screen", "smallScreen")
                  ? ("minimal" as const)
                  : ("compact" as const)
              }
            >
              {"Roadmap"}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button___7ZyHz)}
              size={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? ("compact" as const)
                  : hasVariant(globalVariants, "screen", "smallScreen")
                  ? ("minimal" as const)
                  : ("compact" as const)
              }
            >
              {"Paint & Sins"}
            </Button>

            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <Button
                className={classNames("__wab_instance", sty.button__bwoC8)}
                size={
                  hasVariant(globalVariants, "screen", "smallScreen")
                    ? ("minimal" as const)
                    : ("compact" as const)
                }
              >
                {"Limbo"}
              </Button>
            ) : null}
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <Button
                className={classNames("__wab_instance", sty.button__qYsb)}
                size={
                  hasVariant(globalVariants, "screen", "smallScreen")
                    ? ("minimal" as const)
                    : ("compact" as const)
                }
              >
                {"Lust"}
              </Button>
            ) : null}
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <Button
                className={classNames("__wab_instance", sty.button__mEwqt)}
                size={
                  hasVariant(globalVariants, "screen", "smallScreen")
                    ? ("minimal" as const)
                    : ("compact" as const)
                }
              >
                {"Gluttony"}
              </Button>
            ) : null}
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <Button
                className={classNames("__wab_instance", sty.button___7R3GY)}
                size={
                  hasVariant(globalVariants, "screen", "smallScreen")
                    ? ("minimal" as const)
                    : ("compact" as const)
                }
              >
                {"Greed"}
              </Button>
            ) : null}
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <Button
                className={classNames("__wab_instance", sty.button___57ALq)}
                size={
                  hasVariant(globalVariants, "screen", "smallScreen")
                    ? ("minimal" as const)
                    : ("compact" as const)
                }
              >
                {"Anger"}
              </Button>
            ) : null}
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <Button
                className={classNames("__wab_instance", sty.button__gKlSp)}
                size={
                  hasVariant(globalVariants, "screen", "smallScreen")
                    ? ("minimal" as const)
                    : ("compact" as const)
                }
              >
                {"Heresy"}
              </Button>
            ) : null}
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <Button
                className={classNames("__wab_instance", sty.button__wPrgh)}
                size={
                  hasVariant(globalVariants, "screen", "smallScreen")
                    ? ("minimal" as const)
                    : ("compact" as const)
                }
              >
                {"Violence"}
              </Button>
            ) : null}
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <Button
                className={classNames("__wab_instance", sty.button__bSq1L)}
                size={
                  hasVariant(globalVariants, "screen", "smallScreen")
                    ? ("minimal" as const)
                    : ("compact" as const)
                }
              >
                {"Violence"}
              </Button>
            ) : null}
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <Button
                className={classNames("__wab_instance", sty.button__nh4Da)}
                size={
                  hasVariant(globalVariants, "screen", "smallScreen")
                    ? ("minimal" as const)
                    : ("compact" as const)
                }
              >
                {"Fraud"}
              </Button>
            ) : null}

            <Button
              className={classNames("__wab_instance", sty.button__sAhu4)}
              size={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? ("compact" as const)
                  : hasVariant(globalVariants, "screen", "smallScreen")
                  ? ("minimal" as const)
                  : ("compact" as const)
              }
            >
              {"Throne"}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__ajdeK)}
              size={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? ("compact" as const)
                  : hasVariant(globalVariants, "screen", "smallScreen")
                  ? ("minimal" as const)
                  : ("compact" as const)
              }
            >
              {"FAQ"}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__exLiq)}
              size={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? ("compact" as const)
                  : hasVariant(globalVariants, "screen", "smallScreen")
                  ? ("minimal" as const)
                  : ("compact" as const)
              }
            >
              {"Team"}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__d7MV5)}
              size={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? ("compact" as const)
                  : hasVariant(globalVariants, "screen", "smallScreen")
                  ? ("minimal" as const)
                  : ("compact" as const)
              }
            >
              {"Contact"}
            </Button>
          </p.Stack>

          <div
            data-plasmic-name={"spacer"}
            data-plasmic-override={overrides.spacer}
            className={classNames(projectcss.all, sty.spacer)}
          />

          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <div
              data-plasmic-name={"profile"}
              data-plasmic-override={overrides.profile}
              className={classNames(projectcss.all, sty.profile)}
            >
              <Button
                className={classNames("__wab_instance", sty.button__o0CYd, {
                  [sty.buttonsynced__o0CYdOtsOf]: hasVariant(
                    variants,
                    "synced",
                    "synced"
                  )
                })}
              >
                {hasVariant(variants, "synced", "synced") ? "Unsync" : "Sync"}
              </Button>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mGgux
                )}
              >
                {"Edit Profile"}
              </div>
            </div>
          ) : null}
        </div>

        <h1
          data-plasmic-name={"h1"}
          data-plasmic-override={overrides.h1}
          className={classNames(
            projectcss.all,
            projectcss.h1,
            projectcss.__wab_text,
            sty.h1
          )}
        >
          {"Main Content"}
        </h1>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__qaRpz
          )}
        >
          {""}
        </div>

        {true ? (
          <Reveal
            cascade={false}
            className={classNames("__wab_instance", sty.reveal__ufKEa)}
            delay={1 as const}
            direction={"up" as const}
            effect={"zoom" as const}
            reverse={false}
            triggerOnce={false}
          >
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__no8Ea)}
              displayHeight={"100%" as const}
              displayMaxHeight={"1073px" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"216px" as const}
              displayMinWidth={"0" as const}
              displayWidth={"100%" as const}
              loading={"lazy" as const}
              src={{
                src: imageNjSfrrcy2,
                fullWidth: 687,
                fullHeight: 1031,
                aspectRatio: undefined
              }}
            />
          </Reveal>
        ) : null}
        {true ? (
          <Reveal
            cascade={false}
            className={classNames("__wab_instance", sty.reveal___6R2Cn)}
            delay={1 as const}
            direction={"up" as const}
            effect={"zoom" as const}
            reverse={false}
            triggerOnce={false}
          >
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__v3QdF)}
              displayHeight={"100%" as const}
              displayMaxHeight={"1073px" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"216px" as const}
              displayMinWidth={"0" as const}
              displayWidth={"100%" as const}
              loading={"lazy" as const}
              src={{
                src: imageNjSfrrcy2,
                fullWidth: 687,
                fullHeight: 1031,
                aspectRatio: undefined
              }}
            />
          </Reveal>
        ) : null}
      </p.Stack>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "menu", "spacer", "profile", "h1"],
  header: ["header", "menu", "spacer", "profile"],
  menu: ["menu"],
  spacer: ["spacer"],
  profile: ["profile"],
  h1: ["h1"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: "div";
  menu: "div";
  spacer: "div";
  profile: "div";
  h1: "h1";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    menu: makeNodeComponent("menu"),
    spacer: makeNodeComponent("spacer"),
    profile: makeNodeComponent("profile"),
    h1: makeNodeComponent("h1"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
