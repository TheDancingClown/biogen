import React from 'react';
import { Alert, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const Climate = (props) => {
  let climateList = []
  props.climateSequence.map((temp,index) => {
    climateList.push(<Image
      key={index} style={styles.climateIcon} source={temp}
      />
    )
  })

  const showAlert = () =>{
    Alert.alert(
       "The sun and snow icons indicate climate change with the leftmost icon showing the current climate.\n\n Four suns indicate global warming and triggers a runaway greenhouse. Four snows trigger a snowball earth. In either case the game can be ended early in armageddon by clicking 'Medea'."
    )
 }
  
  return ( 
    <TouchableOpacity onPress = {showAlert}>
      <View style={styles.iconDisplay}>{climateList.reverse()}</View>
    </TouchableOpacity> 
  )
}

const styles = StyleSheet.create({
  iconDisplay: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 25
  },
  climateIcon: {
    height: 20,
    width: 20,
    margin: 10
  }
});

export default Climate;