import React from "react";
import { getStorybookUI, configure } from "@storybook/react-native";

import "./.storybook/rn-addons";

// import stories
configure(() => {
  require("./stories");
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

export default function App() {
  return <StorybookUIRoot />;
}
