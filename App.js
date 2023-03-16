import { StyleSheet, SafeAreaView } from 'react-native';
import Theme from './src/Theme';
import AppBar from './src/components/AppBar';
import SearchBar from './src/components/SearchBar';
import AdBanner from './src/components/AdBanner';


export default function App() {

  const handelSearch = (text) => {
    console.log(text)
  }


  return (
    <SafeAreaView style={styles.appContainer}>
      <AppBar></AppBar>
      <SearchBar onSearch={handelSearch}></SearchBar>
      <AdBanner></AdBanner>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: Theme.grey,
  },
});
