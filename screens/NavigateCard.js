import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch } from 'react-redux';
import tw from 'twrnc'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useNavigation } from '@react-navigation/native';
import { setDestination } from '../slices/navSlice';
import NavFavourite from '../components/NavFavourite';
import { Icon } from 'react-native-elements';

const NavigateCard = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Maxxy</Text>

      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            styles={toInputBoxStyle}
            placeholder='where to?'
            fetchDetails={true}
            enablePoweredByContainer={false}
            nearbyPlacesAPI='GooglePlaceSearch'
            minLength={2}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en'
            }}
            returnKeyType={'search'}
            onPress={(data, detail = null) => {
              dispatch(setDestination({
                location: detail.geometry.location,
                description: data.description
              }))
              navigation.navigate('RideOptionsCard')
            }}
            debounce={400}
          />
        </View>

        <NavFavourite />


      </View>
      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
        <TouchableOpacity
        onPress={()=> navigation.navigate('RideOptionsCard')}
        style={tw`flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
          <Icon
            name='car'
            type='font-awesome'
            color='white'
            size={16}
          />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`flex-row justify-between bg-white w-24 px-4 py-3 rounded-full`}>
          <Icon
            name='fast-food-outline'
            type='ionicon'
            color='black'
            size={16}
          />
          <Text style={tw`text-black text-center`}>Eats</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0
  }
})
