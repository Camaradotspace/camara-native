import * as React from "react";
import { Button as RNButton, View } from "react-native";
import { ButtonProps } from "./button.types";

export const Button: React.FunctionComponent<ButtonProps> = ({
  title,
  handlePress,
  btnColor,
  disabled,
  bgColor,
}) => {
  return (
    <View style={{ backgroundColor: bgColor }}>
      <RNButton
        title={title}
        onPress={handlePress}
        color={btnColor}
        disabled={disabled}
      />
    </View>
  );
};

Button.defaultProps = {
  btnColor: "#fff",
  bgColor: "#024908",
  disabled: false,
};
