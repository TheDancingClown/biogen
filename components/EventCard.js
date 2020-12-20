import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header>Mars Paleo-Ocean</Header>
      <View style={styles.detail}>
        <View style={styles.iconsView}>
          <Image
            style={styles.activeIcon}
            source={require('../src/cosmic.jpg')}
          />
          <Image
            style={styles.activeIcon}
            source={require('../src/oceanic.jpg')}
          />
          <Image
            style={styles.inactiveIcon}
            source={require('../src/coastal.jpg')}
          />
          <Image
            style={styles.inactiveIcon}
            source={require('../src/continental.jpg')}
          />
        </View>
        <View style={styles.information}>
          <Text>If early Mars had a denser atmosphere and warmer climate, nearly a third of its surface could have been covered by liquid water. 
            It would have filled the Vastitas Borealis basin in the northern hemisphere, which mysteriously lies 4-5 km below the mean planetary elevation. 
            Today enough methane lingers in the thin Martian air to indicate possible methanogen life dwelling under the surface, safe from cosmic radiation.
            </Text>
        </View>
        <View style={styles.eventIcons}>
          <Image
            style={styles.activeIcon}
            source={require('../src/heaven.png')}
          />
          <Image
            style={styles.activeIcon}
            source={require('../src/heaven.png')}
          />
          <Image
            style={styles.activeIcon}
            source={require('../src/cooling.jpg')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    width: 500,
    height: 270
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: "center",
  },
  detail: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  icons: {
    textAlign: 'center',
    padding: 10,
  },
  iconsView: {
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  information: {
    width: 250,
    padding: 10,
    marginLeft: 5
  },
  activeIcon: {
    height: 40,
    width: 40,
    margin: 5,
  },
  inactiveIcon: {
    height: 35,
    width: 35,
    margin: 5,
    opacity: 0.2,
    marginLeft: 40
  },
  eventIcons: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    justifyContent: 'center',
    margin: 20
  },
});