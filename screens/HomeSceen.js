import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import tw from 'twrnc';

const HomeSceen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <Text style={[tw`text-red-500 p-10`, styles.text]}>I am the HomeSceen</Text>
    </SafeAreaView>
  )
}

export default HomeSceen

const styles = StyleSheet.create({
  text: {
    color: "purple"
  },
});
