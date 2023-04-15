import { Text, View, Image, ScrollView, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import Theme from '../../Theme';
import AppBar from '../../components/AppBar'
import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar';
import AwesomeAlert from 'react-native-awesome-alerts';
import { Feather } from '@expo/vector-icons';


import { db } from '../../../firebase';

import { collection, doc, getDocs, deleteDoc  } from 'firebase/firestore/lite';




function InventoryScreen({ route, navigation }) {

    const [showAlert, setShowAlert] = useState(false);

    const [data, setData] = useState([]);
    

    async function getData(db) {
        const productCol = collection(db, 'products');
        const productSnapshot = await getDocs(productCol);
        const productList = productSnapshot.docs.map(doc => doc);
        setData(productList);
        console.log(productList);
      }   

      async function deleteProduct(db, id) {
        await deleteDoc(doc(db, "products", id));
        showDeleteAlert();

        getData(db);
      }

    useEffect(()=>{
        getData(db);
    },[])

    const showDeleteAlert = () => {
        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false)
        }, 1000);
    }

    return (
        <View style={styles.container}>
            <AppBar></AppBar>
            <Text style={styles.title}>Product Inventory</Text>
            <ScrollView style={styles.scroll}>

                {(data.map((e, index) => (
                    <View key={index} style={styles.card} >
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: e.data().url }} />
                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.name}>{e.data().name}</Text>
                            <Text style={styles.price}>${e.data().price}</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <TouchableOpacity
                                onPress={() => deleteProduct(db, e.id)}
                            >
                                <View style={styles.removeContainer}>
                                    <Feather name="trash-2" size={24} color={'red'} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
                ))
                }
            </ScrollView >
            <AwesomeAlert
                show={showAlert}
                message="Product Deleted Sucessfully"
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
        height: 100,
        backgroundColor: 'white',
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 15,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 5,
        shadowColor: Theme.primaryColor,
    },
    iconContainer: {
        alignItems: 'center'
    },
    button: {
        bottom: 25,
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

    removeContainer: {
        paddingHorizontal: 32,
        paddingVertical: 5,
        marginBottom: 4,
        borderRadius: 5,
        borderColor: 'red',
        borderWidth: 1,
    },

    imageContainer: {
        width: 60,
        height: 60,
        borderRadius: 10,
    },
    image: {
        height: 60,
        height: 60,
        borderRadius: 10,
    },
    name: {
        fontSize: 15,
        fontFamily: 'Regular',
        marginHorizontal: 10,
        color: Theme.primaryColor,
        flexWrap: 'wrap',

    },
    nameContainer: {
        width: '50%'

    },
    price: {
        fontSize: 20,
        fontFamily: 'Light',
        marginHorizontal: 10,
        color: Theme.accentGreen,
    }
});

export default InventoryScreen;