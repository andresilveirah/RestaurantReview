import React from 'react'
import { Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    color: '#00CCAA',
    padding: 40,
    fontSize: 30
  }
})

export default () => <Text style={styles.header}>
  Restaurant Review
</Text>
