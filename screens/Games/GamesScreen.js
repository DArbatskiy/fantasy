import React, {useState, Component} from 'react'
import {View, ScrollView, Text, Image, TouchableOpacity, Alert, Modal, TouchableHighlight} from 'react-native'
import { companies } from '../../data/dataArrays'
import styles from './styles'
import GamesModal from './GamesModal'

export default function GamesScreen() {

  const [ticker, setTicker] = useState('');
  const [lastRefreshed, setLastRefreshed] = useState('');
  const [openPrice,setOpenPrice] = useState('');
  const [closePrice, setClosePrice] = useState('');

  const [modalVisible, setModalVisible] = useState(false)

  function handleItemPress(ticker) {
    setTicker(ticker)
    setModalVisible(true)
    const API_KEY = 'GR5KIC31BMD0ZSAS'
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=${API_KEY}`)
    .then(response=>response.json())
    .then(data => {
      let lastRefreshed = data["Meta Data"]["3. Last Refreshed"];

      setTicker(data["Meta Data"]["2. Symbol"]);
      setLastRefreshed(data["Meta Data"]["3. Last Refreshed"]);
      setOpenPrice(data["Time Series (Daily)"][`${lastRefreshed}`]["1. open"]);
      setClosePrice(data["Time Series (Daily)"][`${lastRefreshed}`]["4. close"]);
    })
 

  }

  return (
    <ScrollView style={styles.container}>
    <GamesModal modalVisible={modalVisible} setModalVisible={setModalVisible} ticker={ticker} lastRefreshed={lastRefreshed} openPrice={openPrice} closePrice={closePrice} />
      <Text style={styles.header}>Games</Text>
      <View style={styles.items}>
        {companies.map(company => 
          <ScrollView key={company.id}>
            <TouchableOpacity activeOpacity='0.9' onPress={()=>handleItemPress(company.ticker)}>
            <View style={styles.item} >
                <Image style={styles.image} source={company.logo} />
                <Text style={styles.text}>{company.brand}</Text>
            </View>
            </TouchableOpacity>
          </ScrollView>
        )}
      </View>
    </ScrollView>
  )
}
