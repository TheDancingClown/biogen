import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const DiceResults = (props) => {
  let diceResults = []
  let dieImage
  for (const die in props.result) {
    if(die == 'one') {
      dieImage = require('../assets/one.jpg')
    } else if (die == 'two') {
      dieImage = require('../assets/two.jpg')
    } else if (die == 'three') {
      dieImage = require('../assets/three.jpg')
    } else if (die == 'four') {
      dieImage = require('../assets/four.jpg')
    } else if (die == 'five') {
      dieImage = require('../assets/five.jpg')
    } else if (die == 'six') {
      dieImage = require('../assets/six.jpg')
    }
  diceResults.push(
  <View style={styles.row} key={die}>
    <Image source={dieImage} style={styles.die} />
    <Text style={{color: 'white', fontSize: 25 }} key={die}>: {props.result[die]}</Text>
  </View>);
  }
  return (
    <View style={styles.container}>{diceResults}</View>
  )
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  die: {
    height: 20,
    width: 20,
    margin: 5
  },
  text: {

  }
});

export default DiceResults;