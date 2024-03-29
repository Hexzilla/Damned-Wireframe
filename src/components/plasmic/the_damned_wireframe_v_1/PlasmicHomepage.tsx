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
import MainMenu from "../../MainMenu"; // plasmic-import: 5OPwbvd_XQK/component
import Button from "../../Button"; // plasmic-import: 9U02DESJlfv/component
import { Reveal } from "@plasmicpkgs/react-awesome-reveal"; // plasmic-import: R6s1FdhksG/codeComponent
import Story from "../../Story"; // plasmic-import: mYuKdlljvqg/component

import { useScreenVariants as useScreenVariantssKPzWh1XRaeiy } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: sKPzWh1XRaeiy/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_the_damned_wireframe_v_1.module.css"; // plasmic-import: 4Z3UMkZpk9iU1tNC7ianWh/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: kWxJ1fA34dtB/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: 9vaXCj4SKKO/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: gfMcd0a2-6W/icon
import ProfileSvgrepoComsvgIcon from "./icons/PlasmicIcon__ProfileSvgrepoComsvg"; // plasmic-import: odUkh9DYHA/icon
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
  mainMenu?: p.Flex<typeof MainMenu>;
  spacer?: p.Flex<"div">;
  profile?: p.Flex<"div">;
  testing?: p.Flex<"div">;
  testingFunctions?: p.Flex<"div">;
  button?: p.Flex<typeof Button>;
  syncButton?: p.Flex<typeof Button>;
  svg?: p.Flex<"svg">;
  link?: p.Flex<"a">;
  text?: p.Flex<"div">;
  mainContent?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  story?: p.Flex<typeof Story>;
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
  const $ctx = ph.useDataEnv?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantssKPzWh1XRaeiy()
  });

  return (
    <React.Fragment>
      {}
      {}

      <div className={projectcss.plasmic_page_wrapper}>
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
            <MainMenu
              data-plasmic-name={"mainMenu"}
              data-plasmic-override={overrides.mainMenu}
              className={classNames("__wab_instance", sty.mainMenu, {
                [sty.mainMenusynced]: hasVariant(variants, "synced", "synced")
              })}
            />

            <div
              data-plasmic-name={"spacer"}
              data-plasmic-override={overrides.spacer}
              className={classNames(projectcss.all, sty.spacer, {
                [sty.spacersynced]: hasVariant(variants, "synced", "synced")
              })}
            />

            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <div
                data-plasmic-name={"profile"}
                data-plasmic-override={overrides.profile}
                className={classNames(projectcss.all, sty.profile)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__epflS)}>
                  <div
                    data-plasmic-name={"testing"}
                    data-plasmic-override={overrides.testing}
                    className={classNames(projectcss.all, sty.testing)}
                  >
                    <div
                      data-plasmic-name={"testingFunctions"}
                      data-plasmic-override={overrides.testingFunctions}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.testingFunctions
                      )}
                    >
                      {"Testing functions"}
                    </div>

                    <Button
                      data-plasmic-name={"button"}
                      data-plasmic-override={overrides.button}
                      className={classNames("__wab_instance", sty.button)}
                      size={"compact" as const}
                    >
                      {"Mint Random"}
                    </Button>
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.freeBox___5HOlO)}
                  >
                    {(
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? true
                        : true
                    ) ? (
                      <Button
                        data-plasmic-name={"syncButton"}
                        data-plasmic-override={overrides.syncButton}
                        className={classNames(
                          "__wab_instance",
                          sty.syncButton,
                          {
                            [sty.syncButtonsynced]: hasVariant(
                              variants,
                              "synced",
                              "synced"
                            )
                          }
                        )}
                        isDisabled={
                          hasVariant(globalVariants, "screen", "mobileOnly")
                            ? true
                            : undefined
                        }
                      >
                        {hasVariant(variants, "synced", "synced")
                          ? "Unsync"
                          : "Sync"}
                      </Button>
                    ) : null}

                    <ProfileSvgrepoComsvgIcon
                      data-plasmic-name={"svg"}
                      data-plasmic-override={overrides.svg}
                      className={classNames(projectcss.all, sty.svg)}
                      role={"img"}
                    />

                    <a
                      data-plasmic-name={"link"}
                      data-plasmic-override={overrides.link}
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link
                      )}
                    >
                      <div
                        data-plasmic-name={"text"}
                        data-plasmic-override={overrides.text}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text
                        )}
                      >
                        {"Edit Profile"}
                      </div>
                    </a>

                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___8Wyow
                      )}
                    />
                  </div>
                </div>
              </div>
            ) : null}
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

          <div
            data-plasmic-name={"mainContent"}
            data-plasmic-override={overrides.mainContent}
            className={classNames(projectcss.all, sty.mainContent, {
              [sty.mainContentsynced]: hasVariant(variants, "synced", "synced")
            })}
          >
            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1,
                { [sty.h1synced]: hasVariant(variants, "synced", "synced") }
              )}
            >
              {"Main Content"}
            </h1>

            <Story
              data-plasmic-name={"story"}
              data-plasmic-override={overrides.story}
              className={classNames("__wab_instance", sty.story)}
            />
          </div>
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "mainMenu",
    "spacer",
    "profile",
    "testing",
    "testingFunctions",
    "button",
    "syncButton",
    "svg",
    "link",
    "text",
    "mainContent",
    "h1",
    "story"
  ],
  header: [
    "header",
    "mainMenu",
    "spacer",
    "profile",
    "testing",
    "testingFunctions",
    "button",
    "syncButton",
    "svg",
    "link",
    "text"
  ],
  mainMenu: ["mainMenu"],
  spacer: ["spacer"],
  profile: [
    "profile",
    "testing",
    "testingFunctions",
    "button",
    "syncButton",
    "svg",
    "link",
    "text"
  ],
  testing: ["testing", "testingFunctions", "button"],
  testingFunctions: ["testingFunctions"],
  button: ["button"],
  syncButton: ["syncButton"],
  svg: ["svg"],
  link: ["link", "text"],
  text: ["text"],
  mainContent: ["mainContent", "h1", "story"],
  h1: ["h1"],
  story: ["story"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: "div";
  mainMenu: typeof MainMenu;
  spacer: "div";
  profile: "div";
  testing: "div";
  testingFunctions: "div";
  button: typeof Button;
  syncButton: typeof Button;
  svg: "svg";
  link: "a";
  text: "div";
  mainContent: "div";
  h1: "h1";
  story: typeof Story;
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
    mainMenu: makeNodeComponent("mainMenu"),
    spacer: makeNodeComponent("spacer"),
    profile: makeNodeComponent("profile"),
    testing: makeNodeComponent("testing"),
    testingFunctions: makeNodeComponent("testingFunctions"),
    button: makeNodeComponent("button"),
    syncButton: makeNodeComponent("syncButton"),
    svg: makeNodeComponent("svg"),
    link: makeNodeComponent("link"),
    text: makeNodeComponent("text"),
    mainContent: makeNodeComponent("mainContent"),
    h1: makeNodeComponent("h1"),
    story: makeNodeComponent("story"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
