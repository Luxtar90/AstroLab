import { useColorScheme as _useColorScheme } from "react-native";

export function useColorScheme() {
  return _useColorScheme() ?? "light"; // Retorna "light" por defecto si es undefined
}
