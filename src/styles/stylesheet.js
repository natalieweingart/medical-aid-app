import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 5,
  },

  heading: {
    fontSize: 25,
    alignSelf: 'center',
    paddingVertical: 10,
    fontWeight: 'bold',
  },

  inputBox: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },

  descriptionBox: {
    borderWidth: 1,
    paddingHorizontal: 7,
    paddingTop: 7,
    paddingBottom: 50,
    margin: 10,
  },

  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
  },

  saveButton: {
    borderRadius: 20,
     margin: 20,
     padding: 10,
     backgroundColor: '#77A8AB',
     alignItems: 'center',
     shadowColor: "#000",
     shadowOffset: {
       width: 0,
       height: 2,
     },
     shadowOpacity: 0.25,
     shadowRadius: 3.84,
     elevation: 5
  },

  cancelButton: {
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#F2F4F8',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    marginTop: '5%',
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },

  listHeading: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  listText: {
    fontSize: 16,
    marginBottom: 5,
  },

  modalContent:{
    paddingVertical: '5%'
  },

  close:{
    alignSelf: 'center',
    padding: '2%'
  },

  cardList:{
    padding: '2%',
  },

  itemCard:{
    paddingHorizontal: '10%',
  },

  itemCardMuted:{
    paddingHorizontal: '10%',
    backgroundColor: '#e2e2e2',
  },
  
  errorText:{
    color: 'red',
    fontWeight: 'bold',
    marginLeft: '4%',
    marginBottom: '2%'
  },
});
