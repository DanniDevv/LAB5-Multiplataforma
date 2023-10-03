import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Animated, Easing } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from "react-native-web";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const translateY = useRef(new Animated.Value(0)).current;

  const bounceAnimation = () => {
    translateY.setValue(0);
    Animated.sequence([
      Animated.timing(translateY, {
        toValue: -20,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ]).start(bounceAnimation);
  };

  useEffect(() => {
    bounceAnimation();
  }, []);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.background, { transform: [{ translateY: translateY }] }]}
      >
        <Icon name="music" size={100} color="royalblue" />
        <Text style={styles.title}>Note Nexus</Text>
      </Animated.View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Stack")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    marginTop: 20,
    color: "royalblue",
  },
  button: {
    backgroundColor: 'royalblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
});
