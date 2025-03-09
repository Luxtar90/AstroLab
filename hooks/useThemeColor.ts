import { useColorScheme } from "react-native";

export function useThemeColor(
  lightColor: string,
  darkColor: string
): string {
  const theme = useColorScheme();
  return theme === "dark" ? darkColor : lightColor;
}
