import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Button } from "../src/components";
import { PhoneView } from "../src/utils/iPhone";

export default {
  title: "Button",
  component: Button,
};

storiesOf("Button", module)
  .addDecorator((getStory) => <PhoneView>{getStory()}</PhoneView>)
  .add("with text", () => (
    <Button onPress={action("clicked-text")} title="Hello Button" />
  ))
  .add("with some emoji", () => (
    <Button onPress={action("clicked-emoji")} title="😀 😎 👍 💯" />
  ));

// import React from "react";
// import { linkTo } from "@storybook/addon-links";
// import { storiesOf } from "@storybook/react-native";
// import Welcome from ".";

// storiesOf("Welcome", module).add("to Storybook", () => (
//   <Welcome showApp={linkTo("Button")} />
// ));
