import ReactDOM from "react-dom";
import React from "react";

import SuccessAlert from "./SuccessAlert";
import {
  Tile,
  Stack,
  Text,
  List,
  ListItem,
  Heading,
  TextLink,
  Separator
} from "@kiwicom/orbit-components/";
import { FlightServices, Check } from "@kiwicom/orbit-components/lib/icons";

const App = () => (
  <Stack>
    <SuccessAlert />
    <Tile icon={<FlightServices />} title="Click me!" expandable>
      <Stack>
        <Text>
          <Text weight="bold" element="span">
            orbit-components
          </Text>{" "}
          use benefits of CSS-in-JS and works out of the box.
        </Text>
        <Stack spacing="tight">
          <Heading type="title4">That means:</Heading>
          <List>
            <ListItem icon={<Check color="success" />}>
              No other dependencies.
            </ListItem>
            <ListItem icon={<Check color="success" />}>
              No need of any configuration.
            </ListItem>
            <ListItem icon={<Check color="success" />}>
              Works with server-side rendering.
            </ListItem>
          </List>
        </Stack>
      </Stack>
    </Tile>
    <Separator />
    <Text align="center">
      Check our{" "}
      <TextLink
        type="secondary"
        href="https://github.com/kiwicom/orbit-components/"
        external
      >
        GitHub repository
      </TextLink>{" "}
      or{" "}
      <TextLink type="secondary" href="https://orbit.kiwi" external>
        documentation
      </TextLink>
      .
    </Text>
  </Stack>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
