import React from 'react'
import { Alert, Text, TouchableOpacity, StyleSheet, View } from 'react-native'

const HelpAlert = () => {
   const showAlert = () =>{
      Alert.alert(
         "This display shows the climate change icons, the time frame and current event.\n\nThe sun and snow icons indicate climate change with the leftmost icon showing the current climate.\n\n Four suns indicate global warming and triggers a runaway greenhouse. Four snows trigger a snowball earth. In either case the game can be ended early in armageddon by clicking 'Medea'."
      )
   }
   return (
     <View style={styles.container}>
      <TouchableOpacity onPress = {showAlert} style = {styles.button}>
         <Text style={styles.buttonText}>?</Text>
      </TouchableOpacity>
    </View>
   )
}
export default HelpAlert;

const styles = StyleSheet.create ({
  container: {
    alignItems: 'flex-end',
    marginRight: 50,
    marginBottom: 10
  },
  button: {
      backgroundColor: '#301263',
      width: 40,
      borderRadius: 50,
      alignItems: 'center',
   },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
})