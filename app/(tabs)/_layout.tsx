import { Tabs } from "expo-router";
import { ThemeProvider } from "../../context/ThemeContext"; 

export default function Layout() {
  return (
    <ThemeProvider>
      <Tabs screenOptions={{ headerShown: true }}>
        <Tabs.Screen name="index" options={{ title: "Inicio" }} />
        <Tabs.Screen name="solutions" options={{ title: "Soluciones" }} />
        <Tabs.Screen name="conversion" options={{ title: "Conversión" }} />
        <Tabs.Screen name="settings" options={{ title: "Configuración" }} />
      </Tabs>
    </ThemeProvider>
  );
}
