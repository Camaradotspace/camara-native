import { storiesOf } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";
import { Button } from ".";

export default {
  title: "Button",
  component: Button,
};

// Stories
export const Basic = () => (
  <Button
    title="Basic Button"
    handlePress={() => console.log("Basic button clicked")}
  />
);
export const Default = () => (
  <View style={{ alignItems: "center" }}>
    <Button
      title="Default Button"
      bgColor="#2108ff"
      handlePress={() => console.log("Default button clicked")}
    />
  </View>
);

// Add all stories to RN/Expo storybook
storiesOf("Button", module).add("Basic", Basic).add("Default", Default);
