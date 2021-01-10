import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Manna = (props) => {
  var mannaCubes = [];
  if(props.manna) {
    props.manna.map((cubeColour,index) => {
      mannaCubes.push(<View
        key={index} style={[styles.mannaCube, {backgroundColor: cubeColour}]}>
          <Text style={{color: cubeColour, fontSize: 1}}>X</Text>
        </View>
      )
    });
  };
  return (
    <View style={styles.iconRow}>
      {mannaCubes}
    </View>
  )
};

const Bionts = (props) => {
  var biontDomes = [];
  if(props.bionts) {
    props.bionts.map((domeColour,index) => {
      biontDomes.push(
        <View
          key={index} 
          style={[styles.biont, {backgroundColor: domeColour}]}>
          <Text style={{color: domeColour, fontSize: 1}}>X</Text>
        </View>
      )
    });
  };
  return (
    <View style={styles.iconRow}>
      {biontDomes}
    </View>
  )
};

const LifeDice = (props) => {
  let diceIcons = [];
  if(props.dice) {
  let warmingDice = [require('../assets/warming.png')].concat(props.dice.warming)
  let coolingDice = [require('../assets/cooling.png')].concat(props.dice.cooling)
  let dice = warmingDice.concat(coolingDice)
    dice.map((die,index) => {
      diceIcons.push(<Image
        key={index} style={styles.lifeDice} source={die}
        />
      )
    });
  };
  return (
    <View style={styles.iconRow}>
      {diceIcons}
    </View>
  )
};

const Enzymes = (props) => {
  var enzymeList = [];
  if(props.enzymes) {
    props.enzymes.map((enzymeSlot, index) => {
      enzymeList.push(<Image
        key={index} style={styles.enzymeSlot} source={enzymeSlot}
        />
      )
    });
  };
  return (
    <View style={styles.iconRow}>
      {enzymeList}
    </View>
  )
};

const styles = StyleSheet.create({
  
  lifeDice: {
    height: 11,
    width: 11,
    margin: 1
  },
  enzymeSlot: {
    height: 15,
    width: 15,
    margin: 1,
    borderRadius: 7.5
  },
  mannaCube: {
    width: 10,
    height: 10,
    margin: 4,
    borderColor: 'black',
    borderWidth: 1
  },
  biont: {
    width: 10,
    height: 10,
    margin: 4,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5
  },
  iconRow: {
    justifyContent: 'center', 
    flexDirection: 'row', 
    height: 17
  }
});

export {
  Manna,
  LifeDice,
  Enzymes,
  Bionts
}