import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native-web";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

const PlaylistScreen = () => {
    const songs = [
        { id: "1", title: "Rock" },
        { id: "2", title: "Ingles" },
        { id: "3", title: "Bachata" },
        { id: "4", title: "Romanticas" },
        { id: "5", title: "Baladas" },
        { id: "6", title: "Techno" },
        { id: "7", title: "Regeton" },
        { id: "8", title: "Huayno" },
        { id: "9", title: "Sad" },
        { id: "10", title: "Metal" },
    ];

    const playSong = (song) => {
        console.log(`Reproduciendo: ${song}`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>NoteNexus</Text>
                <Ionicons name="musical-notes" size={32} color="royalblue" />
            </View>


            <ScrollView style={styles.content}>
                {songs.map((song) => (
                    <TouchableOpacity
                        key={song.id}
                        style={styles.songItem}
                        onPress={() => playSong(song.title)}
                    >
                        <View style={styles.songSquare}>
                            <Ionicons name="musical-notes" size={32} color="royalblue" />
                        </View>
                        <Text style={styles.songTitle}>{song.title}</Text>
                        <Ionicons name="play" size={32} color="black" style={styles.playButton} />
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        color: "black",
        marginRight: 10,
    },
    content: {
        flex: 1,
        width: "90%",
    },
    songItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "royalblue", 
        borderRadius: 10,
        padding: 20,
        marginBottom: 10,
    },
    songSquare: {
        width: 64,
        height: 64,
        borderRadius: 10,
        backgroundColor: "#282828",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },
    songTitle: {
        color: "black",
        fontSize: 30,
    },
    playButton: {
        marginLeft: "auto",
    },
});

export default PlaylistScreen;
