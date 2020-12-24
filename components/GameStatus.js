import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const GameStatus = (props) => {
  const [temperatureIcons, addTemperatureIcon] = useState([]);

  return (
    <View style={styles.gameStatus}>
      <Text style={styles.statusText}>{(props.timeClock > 0.6) ? `${props.timeClock} billion years ago` : 'Phanerozoic Eon'}</Text>
      <Text style={styles.statusText}>{props.currentEvent.title}</Text>
      <TempIcons 
        temperature={props.temperatureSequence} 
        />
    </View>
  )
}

const TempIcons = (props) => {
  var tempList = []

  props.temperature.map((temp,index) => {

      tempList.push(<Image
        key={index} style={styles.tempIcon} source={temp}
        />
      )
  })
  
  return (  
    <View style={styles.iconDisplay} >{tempList}</View>
  )
}

const styles = StyleSheet.create({
  gameStatus: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  statusText: {
    color: 'white',
    textAlign: 'center',
    margin: 10
  },
  iconDisplay: {
    flexDirection: 'row'
  },
  tempIcon: {
    height: 20,
    width: 20,
    margin: 10
  }
});

export default GameStatus