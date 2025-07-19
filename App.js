import { View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


import FeedbackForm from './components/FeedbackForm';
import LittleLemonFooter from './components/LittleLemonFooter';
import LittleLemonHeader from './components/LittleLemonHeader';
import LoginScreen from './components/LoginScreen';
import MenuItems from './components/MenuItems';
import WelcomeScreen from './components/WelcomeScreen';

// const Drawer = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
<NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
          <Drawer.Navigator useLegacyImplementation
           >
            <Drawer.Screen 
            name="Login" 
            component={LoginScreen} 
            />
            <Drawer.Screen 
            name="Welcome" 
            component={WelcomeScreen} 
           
            />
          </Drawer.Navigator>
        </View>
        <View style={styles.footer}>
          <LittleLemonFooter />
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footer: {
    backgroundColor: '#333333',
  },
})