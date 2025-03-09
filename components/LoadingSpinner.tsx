import React, { useEffect, useRef } from "react";
import { View, Animated, Text, Easing, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const LoadingSpinner = ({ visible }: { visible: boolean }) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.loop(Animated.timing(spinValue, {
        toValue: 1, duration: 2000, useNativeDriver: true, easing: Easing.linear,
      })).start();
    }
  }, [visible]);

  const spin = spinValue.interpolate({ inputRange: [0, 1], outputRange: ["0deg", "360deg"] });

  if (!visible) return null;

  return (
    <View style={styles.loadingContainer}>
      <Animated.View style={[styles.loadingContent, { transform: [{ rotate: spin }] }]}>
        <Icon name="science" size={40} color="#2196F3" />
      </Animated.View>
      <Text style={styles.loadingText}>Reiniciando calculadora...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(255, 255, 255, 0.9)", justifyContent: "center", alignItems: "center" },
  loadingContent: { width: 60, height: 60, justifyContent: "center", alignItems: "center" },
  loadingText: { marginTop: 16, fontSize: 16, color: "#2196F3", fontWeight: "bold" },
});

export default LoadingSpinner;
