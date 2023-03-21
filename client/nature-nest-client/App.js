import { StyleSheet, View, Text, } from 'react-native';
import Theme from './src/Theme';
import AppBar from './src/components/AppBar';
import SearchBar from './src/components/SearchBar';
import AdBanner from './src/components/AdBanner';
import NavigationBar from './src/components/NavigationBar';
import ProductCard from './src/components/productCard';
import { useFonts } from 'expo-font';
import Subheading from './src/components/Subheading';



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
    <View style={styles.appContainer}>
      <AppBar></AppBar>
      <SearchBar onSearch={handelSearch}></SearchBar>
      <AdBanner></AdBanner>
      <Subheading></Subheading>
      <ProductCard></ProductCard>
      <NavigationBar></NavigationBar>
    </View >
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: Theme.grey,
    flex: 1,
  },
});
