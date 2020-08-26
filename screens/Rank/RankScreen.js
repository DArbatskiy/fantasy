import React from 'react'
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native'
import { rank } from '../../data/dataArrays'

export default function RankScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Rank</Text>
      <Text style={styles.title}>TOP-10</Text>
      {rank.map(item =>
        <View style={styles.wrapper} key={item.id}>
        <Text style={styles.place}>{item.place}</Text>
        <Image style={styles.image} source={item.image} />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.games}>{item.games} games played</Text>
        </View>
        <Text style={styles.points}>{item.points}</Text>
      </View>
      )}
    </ScrollView>
  )
}

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
    paddingBottom: 20
  },
  title: {
    color: 'white'
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10
  },
  place: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white'
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white'
  },  
  name: {
    fontSize: 15,
    color: 'white'
  },
  games: {
    fontSize: 12,
    color: 'white'
  },
  points: {
    fontSize: 17,
    color: 'white'
  },
})