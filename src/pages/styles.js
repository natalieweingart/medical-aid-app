import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    txtMain: {
      fontSize: 40,
      textAlign: 'center',
      color: 'black',
      fontWeight: 'bold',
    },
    imgMain: {
      width: 300,
      height: 300,
      marginTop: '5%',
    },
    btnCont: {
      marginTop: '5%',
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      backgroundColor: '#77A8AB',
      width: 170,
      height: 45,
      },
    btnTxt: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
      alignSelf: 'center',
    }
  });

  export default styles