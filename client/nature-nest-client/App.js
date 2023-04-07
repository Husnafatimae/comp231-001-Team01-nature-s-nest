import { StyleSheet, } from 'react-native';
import { useFonts } from 'expo-font';

import SyncStorage from 'sync-storage';

import Theme from './src/Theme';

import DetailScreen from './src/screens/DetailScreen';
import SearchResultScreen from './src/screens/SearchResultScreen';
import CartScreen from './src/screens/cartScreen';
import HomeScreen from './src/screens/homeScreen';
import CheckOutScreen from './src/screens/checkOutScreen';

import BottomTabNavigator from './src/navigation/bottomTabNavigator';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();



export default function App() {



  const handelSearch = (text) => {
    console.log(text)
  }

  const [loaded] = useFonts({
    'Light': require('./assets/fonts/Poppins-ExtraLight.ttf'),
    'SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='HomePage'
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearcResult"
          component={SearchResultScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePage"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CheckOut"
          component={CheckOutScreen}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: Theme.grey,
    flex: 1,
  },
});
