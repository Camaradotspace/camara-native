export interface ButtonProps {
  title: string;
  handlePress: () => void;
  btnColor?: string;
  bgColor?: string;
  disabled?: boolean;
}
