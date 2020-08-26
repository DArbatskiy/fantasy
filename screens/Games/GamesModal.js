import React from 'react'
import {View, Text, Alert, Modal, TouchableHighlight} from 'react-native'
import styles from './styles'

const image = { uri: "https://reactjs.org/logo-og.png" }

export default function GamesModal (props) {
  const {modalVisible, setModalVisible, ticker, lastRefreshed, openPrice, closePrice} = props
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <View style={styles.modalText}>
                <View><Text>Ticker: {ticker}</Text></View>
                <View><Text>LastRefreshed: {lastRefreshed}</Text></View>
                <View><Text>Open price: ${Math.floor(openPrice * 10) / 10}</Text></View>
                <View><Text>Close price: ${Math.floor(closePrice * 10) / 10}</Text></View>
              </View>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
  )
}