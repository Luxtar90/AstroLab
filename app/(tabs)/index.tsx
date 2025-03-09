import { View, Text, StyleSheet, Button } from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function HomeScreen() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <View style={[styles.container, { backgroundColor: isDark ? "#333" : "#F5F5F5" }]}>
      <Text style={[styles.title, { color: isDark ? "#FFF" : "#000" }]}>Bienvenido a AstroLab</Text>
      <Button title="Cambiar Tema" onPress={toggleTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "bold" },
});
