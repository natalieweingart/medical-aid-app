import {StyleSheet} from 'react-native';

const loginStyles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        height: 600,
    },
    txtTitle: {
      fontSize: 40,
      textAlign: 'center',
      color: 'black',
      fontWeight: 'bold',
      marginTop: '5%',
    },
    txtNewUser: {
        fontSize: 15,
        color: 'black',
        letterSpacing: -1,
    },
    txtCreate: {
        fontSize: 15,
        color: '#77A8AB',
        letterSpacing: -1,
    },
    viewInput: {
      fontSize: 18,
      backgroundColor: '#F2F4F8',
      borderRadius: 25,
      height: 50,
      width: 300,
      padding: 10,
      marginTop: 15,
      justifyContent:"center",
    },
    txtInput: {
        height:50,
        // color: '',
    },
    btnLogin: {
        marginTop: '5%',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: '#77A8AB',
        width: 170,
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
    btnTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
      }
})

export default loginStyles