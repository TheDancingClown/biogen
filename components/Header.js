import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Mars Paleo-Ocean</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: 'black',
    padding: 15,
    alignSelf: 'stretch',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: "center",
    
  }
});