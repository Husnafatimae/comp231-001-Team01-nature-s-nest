import { StyleSheet, View, SafeAreaView } from 'react-native';
import Theme from './src/Theme';
import AppBar from './src/components/AppBar';
import SearchBar from './src/components/SearchBar';
import AdBanner from './src/components/AdBanner';
import NavigationBar from './src/components/NavigationBar';


export default function App() {

  const handelSearch = (text) => {
    console.log(text)
  }


  return (
    <View style={styles.appContainer}>
      <AppBar></AppBar>
      <SearchBar onSearch={handelSearch}></SearchBar>
      <AdBanner></AdBanner>
      <NavigationBar></NavigationBar>
      <View style={styles.test}></View>
    </View >
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: Theme.grey,
    flex: 1,
  },
});
