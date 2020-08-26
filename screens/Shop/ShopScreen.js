import React from 'react'
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native'

export default function ShopScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Shop</Text>
      <ScrollView horizontal={true}>
      <View style={styles.item}>
      <Image style={styles.image} source={require('../../images/netflix.jpg')}/>
        <Text style={styles.title}>Netflix $25</Text>
      </View>
      <View style={styles.item}>
      <Image style={styles.image} source={require('../../images/airpods.jpg')}/>
        <Text style={styles.title}>AirPods</Text>
      </View>
      <View style={styles.item}>
      <Image style={styles.image} source={require('../../images/steam.jpg')}/>
        <Text style={styles.title}>Steam $10</Text>
      </View>
      </ScrollView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
    backgroundColor: '#180b3b'
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    paddingBottom: 20,
  },
  item: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  image: {
    width: 150,
    height: 200,
    backgroundColor: 'white',
    marginRight: 20,
    borderRadius: 10
  },
  title: {
    paddingTop: 10,
    color: 'white',
    textAlign: 'center'
  }
})

