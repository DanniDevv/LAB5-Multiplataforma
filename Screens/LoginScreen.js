import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (username === "Dante" && password === "900100") {
            navigation.navigate("Stack");
        } else {
            alert("Credenciales incorrectas");
        }
    };

    return (
        <ImageBackground
            source={require("../assets/img2.png")}
            style={styles.container}
        >
            <View style={styles.overlay}>
                <Text style={styles.title}>Inicio de Sesión</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre de usuario"
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.loginButton}
                >
                    <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    overlay: {
        backgroundColor: "rgba(0,0,0,0.7)",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: "#fff",
    },
    input: {
        width: "40%",
        height: 40,
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        color: "#fff",
    },
    loginButton: {
        backgroundColor: 'royalblue',
        padding: 15,
        width: "40%",
        borderRadius: 10,
    },
    loginButtonText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
    },
});

export default LoginScreen;
