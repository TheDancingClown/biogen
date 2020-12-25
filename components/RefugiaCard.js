import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const RefugiaCard = (props) => {
  return (
    <View style={styles.refugium}>
      <UnorganisedManna manna={['']}/>
      <LifeDice dice={props.refugium.lifeDice} />
      <Text style={styles.refugiaText}>{props.refugium.title}</Text>
      <Text style={styles.refugiaText}>Catalysts</Text>
      <UnorganisedManna manna={props.refugium.manna}/> 
    </View>
  )
};

const UnorganisedManna = (props) => {
  var mannaCubes = [];
  props.manna.map((cubeColour,index) => {
    mannaCubes.push(<View
      key={index} style={{backgroundColor: cubeColour, width: 10, height: 10, margin: 4}}>
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

const OrganisedManna = (props) => {
  var mannaCubes = [];
  props.manna.map((cubeColour,index) => {
    mannaCubes.push(<View
      key={index} style={{backgroundColor: cubeColour, width: 10, height: 10, margin: 2}}>
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

const styles = StyleSheet.create({
  refugium: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 125,
    margin: 5
  },
  refugiaText: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  lifeDice: {
    height: 10,
    width: 10,
    margin: 1
  }
});

export default RefugiaCard;