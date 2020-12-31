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

const LifeDice = (props) => {
  var diceIcons = [];
  if(props.dice) {
    props.dice.map((die,index) => {
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
    margin: 10
  },
  mannaCube: {
    width: 30,
    height: 30,
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
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
  Enzymes
}