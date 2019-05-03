import React, { useState } from 'react'

import { View, Text, Button, StyleSheet } from 'react-native'

const alternate = (a, b) => (number) => number % 2 === 0 ? a : b
const alternateBackground = alternate('#FFF', '#DFDFDF')

export default ({ index, name, address }) => {
  const [showInfo, setShowInfo] = useState(false)

  return (<View style={[styles.row, { backgroundColor: alternateBackground(index) }]}>
    <View style={styles.edges}>
      <Text>{index+1}</Text>
    </View>
    <View style={styles.nameAddress}>
      <Text>{name}</Text>
      <Text style={styles.address}>{address}</Text>
      {showInfo &&
        <Text style={styles.info}>More info here about {name}</Text>
      }
    </View>
    <View style={styles.edges}>
      <Button
        title="Info"
        accessibilityLabel="Info Button"
        onPress={() => setShowInfo(!showInfo)}
      />
    </View>
  </View>)
}

const styles = StyleSheet.create({
  row: {
    padding: 5,
    flexDirection: 'row'
  },
  edges: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 50
  },
  nameAddress: {
    flex: 8
  },
  address: {
    color: '#AEAEAE'
  },
  info: {
    color: '#AEAE33'
  }
})
