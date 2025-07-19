import { StyleSheet, Text, ScrollView, View, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function FeedbackForm() {
    const [ firstName, onChangeFirstName ] = React.useState('');
    const [ lastName, onChangeLastName ] = React.useState('');
    const [ message, onChangeMessage ] = React.useState('');


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headingSection}>How was your visit to Little Lemon?</Text>
      <Text style={styles.infoSection}>Little Lemon is a charming neighborhood bistro that serves simple food and classic coctails in a lively but casual environment. We would love to hear your experience with us!</Text>
      <TextInput style={styles.input}
       value={firstName}
       onChangeText={onChangeFirstName}
       placeholder="First Name"/>
       <TextInput style={styles.input}
       value={lastName}
       onChangeText={onChangeLastName}
       placeholder="Last Name"/>
       <TextInput style={styles.input}
       value={message}
       onChangeText={onChangeMessage}
       placeholder="Message"/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    contiainer: {
        flex: 1,
        backgroundColor: '#495e57',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor: "#f4ce14"
    },
    messageInput: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16, 
        backgroundColor: "#f4ce14",
    },
    infoSection: {
        color: "#fff",
        fontSize: 18,
        textAlign: "center",
        padding: 30,
    },
    headingSection: {
        color: "#fff",
        fontSize: 30,
        textAlign: "center",
        paddingLeft: 30,
        paddingRight: 30,
    }
})