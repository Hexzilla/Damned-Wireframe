// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4Z3UMkZpk9iU1tNC7ianWh
// Component: 5OPwbvd_XQK
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
import NftButton from "../../NftButton"; // plasmic-import: OWTL5yNhla1/component

import { useScreenVariants as useScreenVariantssKPzWh1XRaeiy } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: sKPzWh1XRaeiy/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_the_damned_wireframe_v_1.module.css"; // plasmic-import: 4Z3UMkZpk9iU1tNC7ianWh/projectcss
import sty from "./PlasmicMainMenu.module.css"; // plasmic-import: 5OPwbvd_XQK/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: 9vaXCj4SKKO/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: gfMcd0a2-6W/icon

export type PlasmicMainMenu__VariantMembers = {};

export type PlasmicMainMenu__VariantsArgs = {};
type VariantPropType = keyof PlasmicMainMenu__VariantsArgs;
export const PlasmicMainMenu__VariantProps = new Array<VariantPropType>();

export type PlasmicMainMenu__ArgsType = {};
type ArgPropType = keyof PlasmicMainMenu__ArgsType;
export const PlasmicMainMenu__ArgProps = new Array<ArgPropType>();

export type PlasmicMainMenu__OverridesType = {
  root?: p.Flex<"div">;
  qty?: p.Flex<"div">;
  nftButton2?: p.Flex<"div">;
  qty2?: p.Flex<"div">;
  nftButton3?: p.Flex<"div">;
  qty3?: p.Flex<"div">;
  nftButton4?: p.Flex<"div">;
  qty4?: p.Flex<"div">;
  nftButton5?: p.Flex<"div">;
  qty5?: p.Flex<"div">;
  nftButton6?: p.Flex<"div">;
  qty6?: p.Flex<"div">;
  nftButton7?: p.Flex<"div">;
  qty7?: p.Flex<"div">;
  nftButton8?: p.Flex<"div">;
  qty8?: p.Flex<"div">;
};

export interface DefaultMainMenuProps {
  className?: string;
}

export const defaultMainMenu__Args: Partial<PlasmicMainMenu__ArgsType> = {};

function PlasmicMainMenu__RenderFunc(props: {
  variants: PlasmicMainMenu__VariantsArgs;
  args: PlasmicMainMenu__ArgsType;
  overrides: PlasmicMainMenu__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultMainMenu__Args, props.args);
  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantssKPzWh1XRaeiy()
  });

  return (
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
        sty.root
      )}
    >
      <Button
        className={classNames("__wab_instance", sty.button__csJ3)}
        size={"compact" as const}
      >
        {"Logo"}
      </Button>

      <Button
        className={classNames("__wab_instance", sty.button__pU9CH)}
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
        className={classNames("__wab_instance", sty.button__uoM5)}
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
        className={classNames("__wab_instance", sty.button__qLpTt)}
        size={
          hasVariant(globalVariants, "screen", "mobileOnly")
            ? ("compact" as const)
            : hasVariant(globalVariants, "screen", "smallScreen")
            ? ("minimal" as const)
            : ("compact" as const)
        }
      >
        {"IRL Events"}
      </Button>

      {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
        <div className={classNames(projectcss.all, sty.freeBox___8PlVe)}>
          <NftButton
            className={classNames("__wab_instance", sty.nftButton__z5Y1O)}
            size={
              hasVariant(globalVariants, "screen", "smallScreen")
                ? ("minimal" as const)
                : ("compact" as const)
            }
          >
            {"Limbo"}
          </NftButton>

          <div
            data-plasmic-name={"qty"}
            data-plasmic-override={overrides.qty}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.qty
            )}
          >
            {"x3"}
          </div>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
        <div
          data-plasmic-name={"nftButton2"}
          data-plasmic-override={overrides.nftButton2}
          className={classNames(projectcss.all, sty.nftButton2)}
        >
          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <Button
              className={classNames("__wab_instance", sty.button__fLm81)}
              size={
                hasVariant(globalVariants, "screen", "smallScreen")
                  ? ("minimal" as const)
                  : ("compact" as const)
              }
            >
              {"Lust"}
            </Button>
          ) : null}

          <div
            data-plasmic-name={"qty2"}
            data-plasmic-override={overrides.qty2}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.qty2
            )}
          >
            {"x0"}
          </div>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
        <div
          data-plasmic-name={"nftButton3"}
          data-plasmic-override={overrides.nftButton3}
          className={classNames(projectcss.all, sty.nftButton3)}
        >
          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <Button
              className={classNames("__wab_instance", sty.button___4CAz4)}
              size={
                hasVariant(globalVariants, "screen", "smallScreen")
                  ? ("minimal" as const)
                  : ("compact" as const)
              }
            >
              {"Gluttony"}
            </Button>
          ) : null}

          <div
            data-plasmic-name={"qty3"}
            data-plasmic-override={overrides.qty3}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.qty3
            )}
          >
            {"x0"}
          </div>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
        <div
          data-plasmic-name={"nftButton4"}
          data-plasmic-override={overrides.nftButton4}
          className={classNames(projectcss.all, sty.nftButton4)}
        >
          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <Button
              className={classNames("__wab_instance", sty.button___9CyUv)}
              size={
                hasVariant(globalVariants, "screen", "smallScreen")
                  ? ("minimal" as const)
                  : ("compact" as const)
              }
            >
              {"Greed"}
            </Button>
          ) : null}

          <div
            data-plasmic-name={"qty4"}
            data-plasmic-override={overrides.qty4}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.qty4
            )}
          >
            {"x0"}
          </div>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
        <div
          data-plasmic-name={"nftButton5"}
          data-plasmic-override={overrides.nftButton5}
          className={classNames(projectcss.all, sty.nftButton5)}
        >
          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <Button
              className={classNames("__wab_instance", sty.button__tpDz)}
              size={
                hasVariant(globalVariants, "screen", "smallScreen")
                  ? ("minimal" as const)
                  : ("compact" as const)
              }
            >
              {"Anger"}
            </Button>
          ) : null}

          <div
            data-plasmic-name={"qty5"}
            data-plasmic-override={overrides.qty5}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.qty5
            )}
          >
            {"x0"}
          </div>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
        <div
          data-plasmic-name={"nftButton6"}
          data-plasmic-override={overrides.nftButton6}
          className={classNames(projectcss.all, sty.nftButton6)}
        >
          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <Button
              className={classNames("__wab_instance", sty.button__opE1K)}
              size={
                hasVariant(globalVariants, "screen", "smallScreen")
                  ? ("minimal" as const)
                  : ("compact" as const)
              }
            >
              {"Heresy"}
            </Button>
          ) : null}

          <div
            data-plasmic-name={"qty6"}
            data-plasmic-override={overrides.qty6}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.qty6
            )}
          >
            {"x0"}
          </div>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
        <div
          data-plasmic-name={"nftButton7"}
          data-plasmic-override={overrides.nftButton7}
          className={classNames(projectcss.all, sty.nftButton7)}
        >
          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <Button
              className={classNames("__wab_instance", sty.button___97ApY)}
              size={
                hasVariant(globalVariants, "screen", "smallScreen")
                  ? ("minimal" as const)
                  : ("compact" as const)
              }
            >
              {"Violence"}
            </Button>
          ) : null}

          <div
            data-plasmic-name={"qty7"}
            data-plasmic-override={overrides.qty7}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.qty7
            )}
          >
            {"x0"}
          </div>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
        <div
          data-plasmic-name={"nftButton8"}
          data-plasmic-override={overrides.nftButton8}
          className={classNames(projectcss.all, sty.nftButton8)}
        >
          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <Button
              className={classNames("__wab_instance", sty.button__xxqqn)}
              size={
                hasVariant(globalVariants, "screen", "smallScreen")
                  ? ("minimal" as const)
                  : ("compact" as const)
              }
            >
              {"Fraud"}
            </Button>
          ) : null}

          <div
            data-plasmic-name={"qty8"}
            data-plasmic-override={overrides.qty8}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.qty8
            )}
          >
            {"x0"}
          </div>
        </div>
      ) : null}

      <Button
        className={classNames("__wab_instance", sty.button__dgUUo)}
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
        className={classNames("__wab_instance", sty.button__aC2KH)}
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
        className={classNames("__wab_instance", sty.button__iGvvo)}
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
        className={classNames("__wab_instance", sty.button__g6Zp)}
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
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "qty",
    "nftButton2",
    "qty2",
    "nftButton3",
    "qty3",
    "nftButton4",
    "qty4",
    "nftButton5",
    "qty5",
    "nftButton6",
    "qty6",
    "nftButton7",
    "qty7",
    "nftButton8",
    "qty8"
  ],
  qty: ["qty"],
  nftButton2: ["nftButton2", "qty2"],
  qty2: ["qty2"],
  nftButton3: ["nftButton3", "qty3"],
  qty3: ["qty3"],
  nftButton4: ["nftButton4", "qty4"],
  qty4: ["qty4"],
  nftButton5: ["nftButton5", "qty5"],
  qty5: ["qty5"],
  nftButton6: ["nftButton6", "qty6"],
  qty6: ["qty6"],
  nftButton7: ["nftButton7", "qty7"],
  qty7: ["qty7"],
  nftButton8: ["nftButton8", "qty8"],
  qty8: ["qty8"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  qty: "div";
  nftButton2: "div";
  qty2: "div";
  nftButton3: "div";
  qty3: "div";
  nftButton4: "div";
  qty4: "div";
  nftButton5: "div";
  qty5: "div";
  nftButton6: "div";
  qty6: "div";
  nftButton7: "div";
  qty7: "div";
  nftButton8: "div";
  qty8: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMainMenu__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMainMenu__VariantsArgs;
    args?: PlasmicMainMenu__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMainMenu__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMainMenu__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicMainMenu__ArgProps,
      internalVariantPropNames: PlasmicMainMenu__VariantProps
    });

    return PlasmicMainMenu__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMainMenu";
  } else {
    func.displayName = `PlasmicMainMenu.${nodeName}`;
  }
  return func;
}

export const PlasmicMainMenu = Object.assign(
  // Top-level PlasmicMainMenu renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    qty: makeNodeComponent("qty"),
    nftButton2: makeNodeComponent("nftButton2"),
    qty2: makeNodeComponent("qty2"),
    nftButton3: makeNodeComponent("nftButton3"),
    qty3: makeNodeComponent("qty3"),
    nftButton4: makeNodeComponent("nftButton4"),
    qty4: makeNodeComponent("qty4"),
    nftButton5: makeNodeComponent("nftButton5"),
    qty5: makeNodeComponent("qty5"),
    nftButton6: makeNodeComponent("nftButton6"),
    qty6: makeNodeComponent("qty6"),
    nftButton7: makeNodeComponent("nftButton7"),
    qty7: makeNodeComponent("qty7"),
    nftButton8: makeNodeComponent("nftButton8"),
    qty8: makeNodeComponent("qty8"),

    // Metadata about props expected for PlasmicMainMenu
    internalVariantProps: PlasmicMainMenu__VariantProps,
    internalArgProps: PlasmicMainMenu__ArgProps
  }
);

export default PlasmicMainMenu;
/* prettier-ignore-end */
