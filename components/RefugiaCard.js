import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const RefugiaCard = (props) => {
  const circle = require('../assets/circle.jpg')
  return (
    <View style={styles.refugium}>
      <Manna manna={[]}/>
      <Text style={[styles.refugiaText,{ color: `${props.refugium.colour}`}]}>{props.refugium.title}</Text>
      <LifeDice dice={props.refugium.lifeDice} />
      <Enzymes enzymes={props.refugium.enzymes}/> 
      <Manna manna={props.refugium.manna}/> 
    </View>
  )
};

const Manna = (props) => {
  var mannaCubes = [];
  props.manna.map((cubeColour,index) => {
    mannaCubes.push(<View
      key={index} style={[styles.mannaCube, {backgroundColor: cubeColour}]}>
        <Text style={{color: cubeColour, fontSize: 1}}>X</Text>
      </View>
    )
  });
  return (
    <View style={styles.iconRow}>
      {mannaCubes}
    </View>
  )
};

const LifeDice = (props) => {
  var diceIcons = [];
  props.dice.map((die,index) => {
    diceIcons.push(<Image
      key={index} style={styles.lifeDice} source={die}
      />
    )
  });
  return (
    <View style={styles.iconRow}>
      {diceIcons}
    </View>
  )
};

const Enzymes = (props) => {
  var enzymeList = [];
  props.enzymes.map((enzymeSlot, index) => {
    enzymeList.push(<Image
      key={index} style={styles.enzymeSlot} source={enzymeSlot}
      />
    )
  });
  return (
    <View style={styles.iconRow}>
      {enzymeList}
    </View>
  )
}

const styles = StyleSheet.create({
  refugium: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 125,
    margin: 3,
    borderColor: 'black',
    borderWidth: 1,
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 10,
  },
  refugiaText: {
    backgroundColor: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 2,
    fontSize: 11
  },
  lifeDice: {
    height: 11,
    width: 11,
    margin: 1
  },
  enzymeSlot: {
    height: 15,
    width: 15,
    margin: 1
  },
  mannaCube: {
    width: 10,
    height: 10,
    margin: 4,
    borderColor: 'black',
    borderWidth: 1
  },
  iconRow: {
    justifyContent: 'center', 
    flexDirection: 'row', 
    height: 17
  }
});

export default RefugiaCard;