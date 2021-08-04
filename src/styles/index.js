import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1DB863',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    imgLogo: {
        height: 75,
        width: '100%',
        alignItems: 'center',
    },
    logo: {
        height: 132,
        width: 100,
        alignItems: 'center',

    },
    textLogo: {
        paddingTop: 50,
        fontSize: 30,
        color: '#FFFFFF'
    },
    form: {
        height: 300,
        justifyContent: 'space-evenly',
    },
    btn: {
        borderRadius: 10,
        backgroundColor: '#666666',
        height: 49,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    input: {
        borderRadius: 20,
    }
});