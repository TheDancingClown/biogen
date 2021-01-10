import React from 'react';
import { Alert, TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';

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
      biontDomes.push(<View
        key={index} style={[styles.biont, {backgroundColor: domeColour}]}>
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
    height: 30,
    width: 30,
    margin: 5
  },
  enzymeSlot: {
    height: 40,
    width: 40,
    margin: 10,
    borderRadius: 20
  },
  mannaCube: {
    width: 30,
    height: 30,
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 15
  },
  biont: {
    width: 30,
    height: 30,
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    shadowColor: 'black',
    shadowOpacity: 0.8,
  },
  iconRow: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', 
    height: 50
  }
});

export {
  Manna,
  LifeDice,
  Enzymes,
  Bionts
}