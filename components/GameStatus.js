import React, { useState } from 'react';
import { Alert, TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';

const GameStatus = (props) => {

  const showAlert = () =>{
    Alert.alert("Current Event and Time",
      "The game begins in the Hadean Eon 4.6 million years ago and, through a series of events each encapsulating 200 milllion years, recreates the formation of Earth until the Phanerozoic Eon, approximately 0.6 billion years ago.\n\nClick 'Event' to draw a new card and trigger the event phase."
    )
  }

  return (
    <TouchableOpacity onPress = {showAlert}>
      <View style={styles.gameStatus}>
        <Text style={styles.statusText}>{(props.timeClock > 0.6) ? `${props.timeClock} billion years ago` : 'Phanerozoic Eon'}</Text>
        <Text style={styles.statusText}>{props.currentEvent.title}</Text>
      </View>
    </TouchableOpacity> 
  )
} 

const styles = StyleSheet.create({
  gameStatus: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    margin: 5,
  },
  statusText: {
    flex: 2,
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    margin: 2,
    fontFamily: "Cochin"
  }
});

export default GameStatus