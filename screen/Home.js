import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Home({ navigation }) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.designlogo}
          source={require("../assets/favicon.png")}
        />
        <Text style={styles.designtextlogo}>
            <Text style={{ color: "black" }}>PoCamera</Text>
        </Text>
        <StatusBar style="black" />
  
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("Kamera")}>
          <Text style={styles.buttonstyles}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#82EEFD",
      alignItems: "center",
      justifyContent: "center",
    },
    designlogo: {
      width: 50,
      height: 50,
    },
    designtextlogo: {
      color: "#212121",
      fontWeight: "bold",
    },
    button: {
      backgroundColor: "#82EEFD",
      height: 50,
      width: 200,
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      borderRadius: 50,
      top: 100,
  
      marginVertical: 4,
    },
  
    buttonstyles: {
      fontWeight: "bold",
      letterSpacing: 0.4,
    },
  });