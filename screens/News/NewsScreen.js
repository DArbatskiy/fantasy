import React from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import { news } from '../../data/dataArrays'

export default function NewsScreen() {
  return (
    <ScrollView style={styles.container} >
      <Text style={styles.header}>News</Text>
      {news.map(item=> 
        <View style={styles.item} key={item.id}>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.paragraph}>{item.paragraph}</Text>
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
    backgroundColor: '#180b3b'
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  item: {
    paddingVertical: 30,
    borderBottomColor: '#221052',
    borderBottomWidth: 1
  },
  date: {
    fontSize: 15,
    color: '#b2a9d6',
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    paddingBottom: 10,
  },
  paragraph: {
    fontSize: 15,
    color: 'white'
  }
})

