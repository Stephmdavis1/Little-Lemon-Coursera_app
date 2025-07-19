import { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Pressable} from 'react-native';

export default function LoginScreen({navigation}) {
    const [ email, onChangeEmail ] = useState('');
    const [ password, onChangePassword ] = useState('');
    const [ loggedIn, onLogin ] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue </Text>
            <TextInput style={styles.inputContainer}
            value={email}
            onChangeText={onChangeEmail}
            keboardType="email-address"
            placeholder="email"
            clearButtonMode="always"
            />
            <TextInput style={styles.inputContainer}
            value={password}
            onChangeText={onChangePassword}
            keboardType="email-address"
            placeholder="password"
            secureTextEntry={true}
            keyboardType={'default'}
            clearButtonMode="always"
            />
            <Pressable style={styles.logInButton}
            onPress={() => navigation.navigate("Welcome")}
            >
            <Text style={styles.buttonText}>Log In</Text>
         </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333'
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputContainer: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor: "#EDEFEE",
  },
  logInButton: {
        height: 50,
        width: 200,
        marginVertical: 8,
        margin: 100,
        borderWidth: 0,
        padding: 5,
        fontSize: 22,
        backgroundColor: "#EE9972",
        borderRadius: 50,
  }, 
  buttonText: {
    fontSize: 25,
    textAlign: 'center',

  }
});


