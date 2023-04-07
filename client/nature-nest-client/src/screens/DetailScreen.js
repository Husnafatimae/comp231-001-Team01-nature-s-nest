import { Text, View, Image, ScrollView, Pressable, StyleSheet } from 'react-native';
import Theme from '../Theme';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

function DetailScreen({ route, navigation }) {

    const data = route.params
    //loads the fonts before rendering the UI elements
    const [loaded] = useFonts({
        'Bold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (

        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} key={data.url} resizeMode='cover' source={{ uri: data.url }} />
            </View>
            <Text style={styles.title}>{data.name}</Text>
            <Text style={styles.priceText}>{data.price}</Text>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.description}>
                    {data.detail}
                </Text>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => { console.log('clicked') }}>
                    <Text style={styles.text}>Add To Cart</Text>
                </Pressable>
            </View>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        height: Theme.SCREEN_HEIGHT * 0.40,
        width: '100%',
        backgroundColor: Theme.secondaryColor,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    scrollView: {
        marginBottom: 82,
    },
    title: {
        fontSize: Theme.SCREEN_HEIGHT * 0.030,
        fontFamily: 'Bold',
        marginHorizontal: 15,
        marginTop: 12
    },

    description: {
        fontFamily: 'Regular',
        fontSize: 15,
        marginHorizontal: 15,
        marginTop: 12
    },
    priceText: {
        marginHorizontal: 15,
        marginTop: 12,
        fontFamily: 'Light',
        fontSize: Theme.SCREEN_HEIGHT * 0.030,
        color: Theme.accentGreen,
    },
    buttonContainer: {
        marginVertical: 12,
        position: 'absolute',
        width: '90%',
        alignSelf: 'center',
        bottom: 0,
    },
    button: {
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
});

export default DetailScreen;