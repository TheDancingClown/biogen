import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const RefugiaCard = (props) => {
  return (
    <View style={styles.refugium}>
      <Text style={styles.refugiaText}>Organised Manna</Text>
      <Text style={styles.refugiaText}>Warming/Cooling</Text>
      <Text style={styles.refugiaText}>{props.refugium.title}</Text>
      <Text style={styles.refugiaText}>Catalysts</Text>
      <MannaCube manna={props.refugium.manna}/>
     
      
    </View>
  )
};

const MannaCube = (props) => {
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
  }
});

export default RefugiaCard;