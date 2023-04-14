import { Text, View, Image, ScrollView, Pressable, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Theme from '../../Theme';
import AppBar from '../../components/AppBar'
import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar';
import AwesomeAlert from 'react-native-awesome-alerts';

import { collection, addDoc} from 'firebase/firestore/lite';
import { db } from '../../../firebase';




function AddProductScreen({ route, navigation }) {

    const [name, setName] = useState('untitled');
    const [price, setPrice] = useState('0');
    const [description, setDescription] = useState('productDescription');
    const [imageURL, setImageURL] = useState('https://beejom.org/wp-content/uploads/2020/10/dummyproduct-1.jpg');

    const [showAlert, setShowAlert] = useState(false);

    const showSaveAlert = () => {
        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false)
        }, 1000);
    }

    const addProduct = async (db) => {
        await addDoc(collection(db, "products"), {
            name: name,
            price: price,
            detail: description,
            url: imageURL
          })

          showSaveAlert()
    }

    return (
        <View style={styles.container}>
            <AppBar></AppBar>
            <Text style={styles.title}>Add New Product</Text>
            <SearchBar placeholder={"Name"} icon={'map-pin'} onSearch={(text) => setName(text)}></SearchBar>
            <SearchBar placeholder={"Price"} icon={'map-pin'} onSearch={(text) => setPrice(text)}></SearchBar>
            <SearchBar placeholder={"Product Description"} icon={'map-pin'} onSearch={(text) => setDescription(text)}></SearchBar>
            <SearchBar placeholder={"Image URL"} icon={'map-pin'} onSearch={(text) => setImageURL(text)}></SearchBar>

            <View style={styles.button}>
                <Pressable onPress={() => {addProduct(db)}}>
                    <Text style={styles.text}>Add Product</Text>
                </Pressable>
            </View>
            <AwesomeAlert
                show={showAlert}
                message="Product Added Sucessfully"
            />
        </View >)
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 23,
        marginLeft: 15,
        fontFamily: 'Regular',
        color: Theme.primaryColor,
        marginTop: 18,
    },
    button: {
        position: 'absolute',
        bottom: 10,
        width: '94%',
        marginHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        paddingHorizontal: 32,
        borderRadius: 15,
        elevation: 1,
        backgroundColor: Theme.primaryColor,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    card: {
        backgroundColor: Theme.lightGreen,
        marginHorizontal: 12,
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 15,
    },
    cardSection : {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardTextHead: {
        color: Theme.primaryColor,
        fontFamily: 'SemiBold',
        fontSize: 16,
    },
    cardTextDetail : {
        color: Theme.accentGreen,
        fontFamily: 'Regular',
        fontSize: 16,
    },

    cardSectionTotal : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: Theme.accentGreen,
        marginTop: 15,
    },
    cardTextHeadTotal : {
        color: Theme.primaryColor,
        fontFamily: 'SemiBold',
        fontSize: 20,
        marginTop: 5,
    },
    cardTextDetailTotal : {
        color: Theme.accentGreen,
        fontFamily: 'Regular',
        fontSize: 20,
        marginTop: 5,
    },

    postalEmailContainer : {
     flexDirection: 'row',
     justifyContent: 'space-between',
     maxWidth: '44.5%'
    }

});

export default AddProductScreen;