import { Text, View, ScrollView, Pressable, StyleSheet } from 'react-native';
import Theme from '../Theme';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AppBar from '../components/AppBar';
import SearchBar from '../components/SearchBar';
import ProductCardScroll from '../components/productCardScroll';
import AdBanner from '../components/AdBanner'
import Subheading from '../components/Subheading';



function DetailScreen({ navigation }) {


    const navigateToDeatilsPage = (data) => {
        navigation.navigate('Detail', { data: data })
    }

    //loads the fonts before rendering the UI elements
    const [loaded] = useFonts({
        'Bold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (

        <View style={styles.container}>
            <AppBar navigator={navigation}></AppBar>
            <Text style={styles.title}>Welcome!</Text>
            <SearchBar placeholder='What are you looking for?' icon={'search'} onSearch={(queryWord) => navigation.navigate('SearcResult', queryWord )}></SearchBar>
            <AdBanner></AdBanner>
            <Subheading></Subheading>
            <ProductCardScroll navigate={navigation}></ProductCardScroll>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 45,
        marginLeft: 15,
        fontFamily: 'Light',
        color: Theme.primaryColor,
    },
});

export default DetailScreen;