import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container:{
    paddingTop:45
  },
  calendar:{
    backgroundColor:'trasnparent'
  },
  selected:{
    color:"#000",
    fontSize:16,
    marginTop:42
  },
  // Estilos do Modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%',
    marginTop: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100, 
    alignItems: 'center',
    marginHorizontal: 10, // Margem entre os botões
  },
  buttonYes: {
    backgroundColor: '#DCC1EE', 
  },
  buttonNo: {
    backgroundColor: '#707070', 
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})



