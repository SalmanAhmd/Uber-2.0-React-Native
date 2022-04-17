import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import tw from 'twrnc'

const data = [
  {
    id: 1,
    icon: 'home',
    location: 'Home',
    destination: 'Madanpura, Mumbai, Maharashtra, India'
  },
  {
    id: 2,
    icon: 'briefcase',
    location: 'Work',
    destination: 'CST Railway Station, Dhobi Talao, Chhatrapati Shivaji Terminus Area, Fort, Mumbai, Maharashtra, India'
  }
]


const NavFavourite = () => {

  const navigation = useNavigation();
  const { origin } = useSelector(state => state.nav)

  return (
    <FlatList
      data={data}
      // horizontal
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View
          style={[tw`bg-gray-200`, { height: 0.5 }]}
        />
      )}
      renderItem={({ item }) => (
        <TouchableOpacity
          // onPress={() => navigation.navigate(item.screen)}
          style={tw`flex-row items-center p-5`}
          disabled={!origin}
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            type='ionicon'
            name={item.icon}
            color='white'
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
            <Text style={tw`text-gray-500`}>{item.destination}</Text>
          </View>

        </TouchableOpacity>
      )} />
  )
}

export default NavFavourite

const styles = StyleSheet.create({})
