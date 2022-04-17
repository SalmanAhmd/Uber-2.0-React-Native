import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc';
import Map from '../components/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from './NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const MapScreen = () => {

  const navigation = useNavigation()

  return (
    <View>
      <TouchableOpacity
        style={[tw`absolute top-16 left-5 bg-gray-100 z-50 p-3 rounded-full shadow-lg`, { zIndex: 1 }]}
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Icon
          name='menu'
        />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name='NavigateCard'
            component={NavigateCard}
            options={{
              headerShown: false,

            }} />
          <Stack.Screen
            name='RideOptionsCard'
            component={RideOptionsCard}
            options={{
              headerShown: false,

            }} />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})
