import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import HomeScreen from './src/components/_homeScreen/HomeScreen';
import MainApp from './src/MainApp/MainApp';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!a</Text>
    // </View>
    // <HomeScreen />
    <MainApp />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
