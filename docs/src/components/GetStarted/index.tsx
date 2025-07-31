import type { ReactNode } from "react";
import styles from "./styles.module.css";
import Heading from "@theme/Heading";
import CodeBlock from "@theme/CodeBlock";

export default function GetStarted(): ReactNode {
  return (
    <section className={styles.getStarted}>
      <div className="container">
        {/* create a grid of 2 columns */}
        <div className="row">
          <div className="col col--6">
            <Heading as="h2">Getting Started</Heading>
          </div>
          <div className="col col--6">
            <Heading as="h3">Install the package</Heading>
            <CodeBlock language="bash">npm install re-native-ui</CodeBlock>
            <br />
            <Heading as="h3">Setup the theme</Heading>
            <CodeBlock language="tsx">
              {`import {ThemeProvider} from "re-native-ui";

<ThemeProvider>
  <Text>Hello</Text>
  <Text>Hello</Text>
  <Text>Hello</Text>
</ThemeProvider>`}
            </CodeBlock>
            <br />
            <Heading as="h3">Use the components</Heading>
            <CodeBlock language="tsx">
              {`import {Input} from "re-native-ui";

<Input placeholder="Enter your name" />`}
            </CodeBlock>
          </div>
        </div>
      </div>
    </section>
  );
}
