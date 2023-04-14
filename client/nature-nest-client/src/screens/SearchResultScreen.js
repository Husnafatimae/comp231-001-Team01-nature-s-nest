import { Text, View, ScrollView, Pressable, StyleSheet, FlatList } from 'react-native';
import Theme from '../Theme';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import ProductCard from '../components/productCard';
import SearchBar from '../components/SearchBar';
import AppBar from '../components/AppBar';

import {useState, useEffect} from 'react'

import { db } from '../../firebase';

import { collection, getDocs, query, where } from 'firebase/firestore/lite';

import data from '../../data';

function SearchResultScreen({route, navigation}) {


    const queryWord = route.params

    const [data, setData] = useState([]);
    

    async function getData(db) {
        const productCol = collection(db, 'products');
        const productSnapshot = await getDocs(productCol);
        const productList = productSnapshot.docs.map(doc => doc.data());

        setData(productList.filter(product => product.name.toLowerCase() == queryWord.toLowerCase()));
}


    useEffect(()=>{
        getData(db);
    },[]);

    return (

        <View style={styles.container}>
            <AppBar></AppBar>
            <SearchBar onSearch={(queryWord) => navigation.navigate('SearcResult', queryWord )} placeholder='What are you looking for?' icon={'search'}></SearchBar>
            <View>
                <ScrollView
                    bounces={false}
                    style={styles.scrollView}
                >
                    <View style={styles.cardContainer}>
                        {data.map((item, index) => {
                            return <ProductCard key={index} data={item} navigation={navigation}></ProductCard>
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