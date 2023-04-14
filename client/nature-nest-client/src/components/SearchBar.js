import { Text, View, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import Theme from '../Theme';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';


function SearchBar({ placeholder, flex, icon, onSearch }) {

    const [searchText, setsearchText] = useState('');

    const handelSearch = () => {
        onSearch(searchText)
    }

    //loads the fonts before rendering the UI elements
    const [loaded] = useFonts({
        'Light': require('../../assets/fonts/Poppins-ExtraLight.ttf'),
    });

    if (!loaded) {
        return null;
    }



    return (
        <View>
            <View style={styles.searchBar}>
                <Feather name={icon} size={24} color={Theme.lightGreen} />
                <TextInput style={{ paddingHorizontal: 10, overflow:'scroll' }} placeholder={placeholder}
                    onChangeText={setsearchText}
                    onEndEditing={handelSearch}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        padding: 13,
        borderColor: Theme.lightGreen,
        borderWidth: 1.8,
        borderRadius: 30,
        marginTop: 15,
        marginHorizontal: 12,
    },
    title: {
        fontSize: 45,
        marginLeft: 15,
        fontFamily: 'Light',
    }
});

export default SearchBar;