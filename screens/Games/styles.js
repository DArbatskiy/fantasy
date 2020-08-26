import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
    backgroundColor: '#180b3b',
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    paddingBottom: 20,
  },
  items: {
    marginLeft: '2%'
  },
  item: {
    width: '95%',
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
    borderStyle: 'solid',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    marginRight: 15
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white'
  },
  modalView: {
    height: '100%',
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    flexDirection: 'column',
    justifyContent: 'center'
  }
})

export default styles