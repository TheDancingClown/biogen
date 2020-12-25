import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const RefugiaCard = (props) => {
  const circle = require('../assets/circle.jpg')
  return (
    <View style={styles.refugium}>
      <Manna manna={['']}/>
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
    <View style={{justifyContent: 'center', flexDirection: 'row'}}>
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
    <View style={{justifyContent: 'center', flexDirection: 'row'}}>
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
    <View style={{justifyContent: 'center', flexDirection: 'row'}}>
      {enzymeList}
    </View>
  )
}

const styles = StyleSheet.create({
  refugium: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 125,
    margin: 5
  },
  refugiaText: {
    backgroundColor: 'black',
    textAlign: 'center',
    fontWeight: 'bold'
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
    margin: 4
  }
});

export default RefugiaCard;