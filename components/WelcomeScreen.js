import { View, Text, ScrollView, StyleSheet, TextInput, Image, useColorScheme } from 'react-native'
import React, { useState } from 'react'


export default function WelcomeScreen() {
    const [ firstName, onChangeFirstName ] = useState('')
    const colorScheme = useColorScheme;

  return (
    <ScrollView indicatorStyle={"white"}  style={styles.container}  keyboardDismissMode={"on-drag"}>
     <View style={[styles.logoContainer, colorScheme === "light" ? {backgroundColor: "#fff"} : {backgroundColor: "#333"}]}>
        <Image style={styles.logo}
        source={require("../assets/logo.png")}
        resizeMode="cover"
        accessible={true}
        accesibilityLabel={"Little Lemon logo"}
        />
        <Text style={[styles.copy, colorScheme === "light" ? {color: "#333"} : {color: "#fff"}]}>
        Little Lemon</Text>
     </View>
      <Text 
      style={[styles.copy, colorScheme === "dark" ? {color: "#fff"} : {color: "#333"}]}>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
    </Text>
    {/* <TextInput style={styles.inputContainer}
    value={firstName}
    onChangeText={onChangeFirstName}
    placeholder="First Name"/> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    logo: {
        height: 100,
        width: 100,
        borderRadius: 20,
    },
    logoContainer: {
        flexDirection: "row",
        justifyContent: "center",
        margin: 10
    },
    container: {
        flex: 1
    },
    copy: {
        fontSize: 24, 
        marginVertical: 8, 
        color: "#EDEFEE", 
        textAlign: "center", 
        padding: 20
    },
    inputContainer: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor: "#EDEFEE",
        color: "grey"
    },
    title: {
        paddingRight: 10,
        paddingLeft: 20,
        paddingTop: 30,
        paddingBottom: 10,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    }
})
