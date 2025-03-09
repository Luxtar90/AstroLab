import React, { useEffect, useRef } from "react";
import { View, Text, Animated, StyleSheet } from "react-native";

export interface AlertProps {  // ✅ Exportar la interfaz
  type: "success" | "error" | "info";
  title: string;
  message: string;
  visible: boolean;
  onHide?: () => void;
}

const CustomAlert: React.FC<AlertProps> = ({ type, title, message, visible, onHide }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
        Animated.spring(translateY, { toValue: 0, tension: 50, friction: 10, useNativeDriver: true })
      ]).start();

      const timer = setTimeout(() => {
        hideAlert();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  const hideAlert = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 0, duration: 300, useNativeDriver: true }),
      Animated.timing(translateY, { toValue: -100, duration: 300, useNativeDriver: true })
    ]).start(() => onHide?.());
  };

  const getAlertStyle = () => {
    switch (type) {
      case "success": return { backgroundColor: "#4CAF50" };
      case "error": return { backgroundColor: "#FF5252" };
      case "info": return { backgroundColor: "#2196F3" };
    }
  };

  if (!visible) return null;

  return (
    <Animated.View style={[styles.alertContainer, getAlertStyle(), { opacity: fadeAnim, transform: [{ translateY }] }]}>
      <Text style={styles.alertTitle}>{title}</Text>
      <Text style={styles.alertMessage}>{message}</Text>
    </Animated.View>
  );
};

// ✅ Asegurarse de exportar `CustomAlert`
export default CustomAlert; 

const styles = StyleSheet.create({
  alertContainer: { position: "absolute", top: 20, left: 20, right: 20, padding: 16, borderRadius: 8 },
  alertTitle: { fontSize: 16, fontWeight: "bold", color: "#fff", marginBottom: 8 },
  alertMessage: { fontSize: 14, color: "#fff" },
});
