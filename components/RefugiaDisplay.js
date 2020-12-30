import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const RefugiaDisplay = (props) => {

  return (
    <View style={styles.refugia}>
      <View style={props.currentEvent.landform.cosmic ? styles.activeLandformRow : styles.inactiveLandformRow}>
        <RefugiaCard
          refugium = {props.cosmicRefugia}
          />
      </View>
      <View style={props.currentEvent.landform.oceanic ? styles.activeLandformRow : styles.inactiveLandformRow}>
        <RefugiaCard
          refugium = {props.oceanicRefugia}
          />
      </View>
      <View style={props.currentEvent.landform.coastal ? styles.activeLandformRow : styles.inactiveLandformRow}>
        <RefugiaCard
          refugium = {props.coastalRefugia}
          />
      </View>
      <View style={props.currentEvent.landform.continental ? styles.activeLandformRow : styles.inactiveLandformRow}>
        <RefugiaCard
          refugium = {props.continentalRefugia}
          />
      </View>
    </View>
  )
};

const RefugiaCard = (props) => {
  const circle = require('../assets/circle.jpg');
  var refugiaRow = []
  props.refugium.map((refugium, index) => {
    refugiaRow.push(
    <View key={index} style={styles.refugium} >
      <Manna manna={[]}/>
      <Text style={[styles.refugiaText,{ color: `${refugium.colour}`}]}>{refugium.title}</Text>
      <LifeDice dice={refugium.lifeDice} />
      <Enzymes enzymes={refugium.enzymes}/> 
      <Manna manna={refugium.manna}/> 
    </View>
    )
  })
  return (
    <View style={{flexDirection: 'row'}}>
      {refugiaRow}
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
  refugia: {
    flex: 1,
    flexDirection: 'column'
  },
  activeLandformRow: {
    flex: 1,
    flexDirection: 'row',
  },
  inactiveLandformRow: {
    flex: 1,
    flexDirection: 'row',
    opacity: 0.3
  },
  refugium: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 125,
    height: 90,
    margin: 3,
    shadowColor: 'lightgrey',
    shadowOpacity: 0.8,
    elevation: 10
    
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

export default RefugiaDisplay;