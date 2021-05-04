import * as React from "react";
import { Button as RNButton } from "react-native";

interface IProps {
  title: string;
  onPress: () => void;
  color?: string;
  disabled?: boolean;
}

export const Button: React.FunctionComponent<IProps> = ({
  title,
  onPress,
  color,
  disabled,
}) => {
  return (
    <RNButton
      title={title}
      onPress={onPress}
      color={color}
      disabled={disabled}
    />
  );
};

Button.defaultProps = {
  color: "red",
  disabled: false,
};
