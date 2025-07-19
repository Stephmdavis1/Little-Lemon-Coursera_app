import { View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import FeedbackForm from './components/FeedbackForm';
import LittleLemonFooter from './components/LittleLemonFooter';
import LittleLemonHeader from './components/LittleLemonHeader';
import LoginScreen from './components/LoginScreen';
import MenuItems from './components/MenuItems';
import WelcomeScreen from './components/WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={LoginScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Login" component={WelcomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#333333',
  },
  footer: {
    backgroundColor: '#333333',
  },
})