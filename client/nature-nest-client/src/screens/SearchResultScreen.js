import { Text, View, ScrollView, Pressable, StyleSheet, FlatList } from 'react-native';
import Theme from '../Theme';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import ProductCard from '../components/productCard';
import SearchBar from '../components/SearchBar';
import AppBar from '../components/AppBar';

import data from '../../data';

function SearchResultScreen() {

    //loads the fonts before rendering the UI elements
    const [loaded] = useFonts({
        'Bold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (

        <View style={styles.container}>
            <AppBar></AppBar>
            <SearchBar></SearchBar>
            <View>
                <ScrollView
                    bounces={false}
                    style={styles.scrollView}
                >
                    <View style={styles.cardContainer}>
                        {data.map((item, index) => {
                            return <ProductCard key={index} data={item}></ProductCard>
                        })}
                    </View>
                </ScrollView>
            </View>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
        height: Theme.SCREEN_HEIGHT * 0.77,
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});

export default SearchResultScreen;