import React from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const Phase = (props) => {
  const phaseText = {
    'Assignment': 'Click on active refugia for a closer view and to assign or reclaim Bionts, and assign enzymes. Bionts in inactive landforms cannot be reassigned. Click finish to proceed to the autocatalytic phase.',
    'Autocatalytic': 'Click on each refugia that has a Biont assigned to make an autocatalytic roll. If you roll a double you may choose to create a microorganism. Click finish to proceed to the purchasing phase.'}
  
  const capitalised = (phase) => {
    return phase.charAt(0).toUpperCase() + phase.slice(1);
  }
  const phaseAlert = () => {
    Alert.alert(`${capitalised(props.phase)}`,
      `${phaseText[capitalised(props.phase)]}`
    )
  };
  return (
    <View>
      <TouchableOpacity onPress = {phaseAlert}>
        <Text style={styles.phaseHeading}>{props.phase} Phase</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  phaseHeading: {
    color: 'white', 
    textAlign: 'center', 
    padding: 10, 
    fontSize: 20,
    textTransform: 'capitalize'
  }
});

export default Phase;
