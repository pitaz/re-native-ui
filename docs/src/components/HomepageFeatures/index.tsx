import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "TypeScript Support",
    Svg: require("@site/static/img/typescript.svg").default,
    description: (
      <>
        Full TypeScript support with comprehensive type definitions for all
        components. Build with confidence using type-safe props and APIs.
      </>
    ),
  },
  {
    title: "Modern Design System",
    Svg: require("@site/static/img/modern_design.svg").default,
    description: (
      <>
        Consistent theming with customizable colors, spacing, and typography.
        Built-in dark mode support with smooth theme switching.
      </>
    ),
  },
  {
    title: "Accessibility First",
    Svg: require("@site/static/img/accessibility.svg").default,
    description: (
      <>
        WCAG compliant components with proper screen reader support, keyboard
        navigation, and focus management for inclusive user experiences.
      </>
    ),
  },
  {
    title: "Lightweight",
    Svg: require("@site/static/img/lightweight.svg").default,
    description: (
      <>
        Built for React Native and React Native Web, with shared components for
        seamless cross-platform development.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--3")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
