/**
 * @format
 * @flow
 */

import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native'

import Header from 'components/Header'
import Restaurant from 'components/Restaurant'

const restaurants = [
  { name: 'React Cafe', address: '123 Anywhere, CA' },
  { name: 'Tandori Chicken', address: '18 Ratiborstraße, BE' },
  { name: 'Free Food', address: '12 Mittelstr., WD' },
  { name: 'Bunny bop', address: '123 Anywhere, CA' },
  { name: 'Bibiry Bapo', address: '18 Ratiborstraße, BE' },
  { name: 'Mega Store', address: '12 Mittelstr., WD' },
  { name: 'Cafe', address: '123 Anywhere, CA' },
  { name: 'Super Chicken', address: '18 Ratiborstraße, BE' },
  { name: 'Good Food', address: '12 Mittelstr., WD' },
  { name: 'React store', address: '123 Anywhere, CA' },
  { name: 'Just Chicken', address: '18 Ratiborstraße, BE' },
  { name: 'Food Free', address: '12 Mittelstr., WD' },
  { name: 'React Cafe Cafe', address: '123 Anywhere, CA' },
  { name: 'Tandori Chicken Hadoup', address: '18 Ratiborstraße, BE' },
  { name: 'Free Cafe', address: '12 Mittelstr., WD' },
  { name: 'React Food', address: '123 Anywhere, CA' },
  { name: 'Free Chicken', address: '18 Ratiborstraße, BE' },
  { name: 'Free Food food', address: '12 Mittelstr., WD' },
  { name: 'The Food', address: '123 Anywhere, CA' },
  { name: 'Food Chicken', address: '18 Ratiborstraße, BE' },
  { name: 'Food Food food', address: '12 Mittelstr., WD' },
]

export default () => {
  const [search, setSearch] = useState('')
  const filteredRestaurants = restaurants
    .filter(place => {
      return !search ||
        place.name.toLowerCase().indexOf(search.toLowerCase()) > -1
    })

  return (
    <View style={{ flex: 1 }}>
      <Header />

      <TextInput
        style={styles.searchInput}
        placeholder="Search Here..."
        value={search}
        onChangeText={text => setSearch(text)}
      />

      <FlatList
        data={filteredRestaurants}
        renderItem={({ item, index }) =>
          <Restaurant key={item.name} {...{...item, index}} />}
        keyExtractor={item => item.name}
        initialNumToRender={15}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchInput: {
    padding: 15,
    fontSize: 20,
    backgroundColor: '#CECECE',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#AEAEAE',
    color: '#444'
  }
})
