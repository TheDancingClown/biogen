import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const EventCard = (props) => {
  return (
    <View style={styles.container}>
      <Header title={props.title}/>

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

        <InformationText information={props.information}/>

        <View style={styles.eventIcons}>
          <Image
            style={styles.activeIcon}
            source={require('../src/heaven.png')}
          />
          <Image
            style={styles.activeIcon}
            source={require('../src/earth.jpg')}
          />
          <Image
            style={styles.activeIcon}
            source={require('../src/cooling.jpg')}
          />
          <Image
            style={styles.activeIcon}
            source={require('../src/warming.jpg')}
          />
        </View>
      </View>
    </View>
  );
}

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  ) 
}

const InformationText = (props) => {
  return (
    <View style={styles.information}>
      <Text>{props.information}</Text>
    </View>
  )
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
    paddingLeft: 20
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
    height: 40,
    width: 40,
    margin: 5,
    opacity: 0.2,
  },
  eventIcons: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    justifyContent: 'center',
    margin: 20
  },
  header: {
    height: 60,
    backgroundColor: '#151040',
    padding: 15,
    alignSelf: 'stretch',
  }

});

export default EventCard