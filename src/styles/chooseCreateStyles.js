import {StyleSheet} from 'react-native';

const chooseStyles = StyleSheet.create ({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        height: 600,
    },
    txtTitle: {
        fontSize: 40,
        color: 'black',
        fontWeight: 'bold',
        marginTop: '25%',
    },
    txtAlready: {
        fontSize: 15,
        color: 'black',
        letterSpacing: -1,
    },
    txtSign: {
        fontSize: 15,
        color: '#77A8AB',
        letterSpacing: -1,
    },
    btn: {
        marginTop: '5%',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: '#77A8AB',
        width: 250,
        height: 45,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    txtBtn: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
    },
})

export default chooseStyles