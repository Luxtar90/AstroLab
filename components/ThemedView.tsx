import { View, type ViewProps } from 'react-native';

import { useThemeColor } from "../hooks/useThemeColor";




export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor(lightColor || "#FFF", darkColor || "#000");


  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
