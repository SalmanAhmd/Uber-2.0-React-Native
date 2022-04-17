import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import 'intl';
import 'intl/locale-data/jsonp/en'


const data = [
  {
    id: 1,
    title: 'UberX',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 2,
    title: 'UberXL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 3,
    title: 'Uber LUX',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  },
]

const SURGE_CHARGE_RATE = 1.5

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null)
  const { travelTimeInformation } = useSelector(state => state.nav)

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          style={[tw`absolute top-3 left-5 p-3 rounded-full`, { zIndex: 1 }]}
          onPress={() => navigation.navigate('NavigateCard')}
        >
          <Icon
            name='chevron-left'
            type='fontawesome'
          />
        </TouchableOpacity>
        <Text style={tw`text-center py-5`}>Select a Ride : {travelTimeInformation?.distance?.text}</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row items-center justify-between px-10 ${item.id === selected?.id && 'bg-gray-200'}`}
          >
            <Image
              style={{
                width: 70,
                height: 70,
                resizeMode: 'contain'
              }}
              source={{
                uri: item.image
              }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
              <Text style={tw``}>{travelTimeInformation?.duration?.text} Travel Time</Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat('en-gb', {
                style: 'currency',
                currency: 'INR'
              }).format(
                (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * item.multiplier) / 10
              )}
            </Text>
          </TouchableOpacity>
        )} />

      <View>
        <TouchableOpacity
          style={tw`bg-black py-3 mx-3 ${!selected && 'bg-gray-300'}`}
          // onPress={(item) => se``tSelected(item)}
          disabled={!selected}
        >
          <Text style={tw`text-center text-white text-xl`} > Choose {selected?.title}</Text>
        </TouchableOpacity>

      </View>


    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
