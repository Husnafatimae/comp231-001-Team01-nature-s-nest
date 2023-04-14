import { Text, View,Pressable, StyleSheet } from 'react-native';
import Theme from '../../Theme';
import MenuCard from '../../components/menuCard';
import AppBar from '../../components/AppBar'



function DashboardScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <AppBar navigator={navigation}></AppBar>
            <Text style={styles.title}>Dashboard</Text>
            <MenuCard menuTitle={'Add Products'} menuIcon={'plus'} onPress={()=>navigation.navigate('AddProduct')}></MenuCard>
            <MenuCard menuTitle={'Track Orders'} menuIcon={'activity'} onPress={()=>console.log('Clicked')}></MenuCard>
            <MenuCard menuTitle={'Inventory'} menuIcon={'archive'} onPress={()=>console.log('Clicked')}></MenuCard>
            <MenuCard menuTitle={'Create Offer'} menuIcon={'file-plus'} onPress={()=>console.log('Clicked')}></MenuCard>
            <MenuCard menuTitle={'Continue as a Shopper'} menuIcon={'toggle-left'} onPress={()=> navigation.navigate('HomePage')}></MenuCard>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 45,
        marginLeft: 15,
        fontFamily: 'Light',
        color: Theme.primaryColor,
        marginBottom: 10
    },
    butotnContainer : {
        position: 'absolute',
        bottom: 10,
    },
    button: {
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
});

export default DashboardScreen;