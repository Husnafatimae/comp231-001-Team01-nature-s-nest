import { Dimensions } from 'react-native';
import { useFonts } from 'expo-font';

const Theme = {
    primaryColor: '#224820',
    secondaryColor: '#C4DDA9',
    lightGreen: '#DBE0D0',
    accentGreen: '#88AA6F',
    SCREEN_WIDTH: Dimensions.get('window').width,
    SCREEN_HEIGHT: Dimensions.get('window').height,
}

export default Theme;