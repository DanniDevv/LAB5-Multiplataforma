import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native-web";

const PremiunScreen = () => {
  return (
    <View style={styles.container}>    
      <View style={styles.premiumBox}>
        <Text style={styles.premiumTitle}>Plan Familiar</Text>
        <Text style={styles.premiumDescription}>
          Escucha música sin anuncios
        </Text>
        <Text style={styles.premiumPrice}>$14.99/mes</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buy</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.premiumBox}>
        <Text style={styles.premiumTitle}>Plan Desarrolador</Text>
        <Text style={styles.premiumDescription}>
          Escucha música sin límites
        </Text>
        <Text style={styles.premiumPrice}>$9.99/mes</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row", 
  },
  premiumBox: {
    width: 350, 
    height: 250, 
    backgroundColor: "#282828",
    borderRadius: 10,
    margin: 30, 
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
    transition: "transform 0.3s", 
    cursor: "pointer", 
  },
  premiumTitle: {
    fontSize: 24, 
    color: "royalblue",
  },
  premiumDescription: {
    fontSize: 18, 
    color: "#BBB",
  },
  premiumPrice: {
    fontSize: 28, 
    fontWeight: "bold",
    color: "royalblue",
  },
  button: {
    backgroundColor: "royalblue",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});

export default PremiunScreen;
