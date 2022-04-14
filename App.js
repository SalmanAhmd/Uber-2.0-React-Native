import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomeSceen from './screens/HomeSceen';

import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <HomeSceen />
    </Provider>
  );
}
