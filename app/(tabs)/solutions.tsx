import React, { useState, useRef } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import CustomAlert, { AlertProps } from "../../components/CustomAlert";
import LoadingSpinner from "../../components/LoadingSpinner";
import { validateNumber, convertToLiters } from "../../hooks/useCalculations";

export default function SolutionsScreen() {
  const { theme } = useTheme();
  const [isResetting, setIsResetting] = useState(false);
  const [alertConfig, setAlertConfig] = useState<AlertProps>({
    visible: false,
    type: "info", // ✅ Ahora coincide con los valores permitidos
    title: "",
    message: "",
  });

  return (
    <View>
      <ScrollView>
        <Text>Bienvenido a la Calculadora de Soluciones</Text>
        {/* Aquí iría el formulario */}
      </ScrollView>
      <CustomAlert {...alertConfig} />
      <LoadingSpinner visible={isResetting} />
    </View>
  );
}

