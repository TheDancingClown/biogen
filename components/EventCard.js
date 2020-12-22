import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const EventCard = (props) => {
  return (
    <View style={styles.container}>
      <Header title={props.card.title}/>

      <View style={styles.detail}>
        <LandformIcons 
          landforms={props.card.landform}
        />

        <InformationText information={props.card.information}/>

        <View style={styles.eventIcons}>
          <EventIcons events={props.card.event} />
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

const LandformIcons = (props) => {
  return (
    <View style={styles.iconsView}>
      <Image
        style={props.landforms.cosmic ? styles.activeIcon : styles.inactiveIcon}
        source={require('../assets/cosmic.jpg')}
      />
      <Image
        style={props.landforms.oceanic ? styles.activeIcon : styles.inactiveIcon}
        source={require('../assets/oceanic.jpg')}
      />
      <Image
        style={props.landforms.coastal ? styles.activeIcon : styles.inactiveIcon}
        source={require('../assets/coastal.jpg')}
      />
      <Image
        style={props.landforms.continental ? styles.activeIcon : styles.inactiveIcon}
        source={require('../assets/continental.jpg')}
      />
    </View>
  )
}

const EventIcons = (props) => {
  var eventIcon
  var eventList = []
    
  props.events.map((event) => {
    if (event == "smite") {
      eventList.push(<Image
        style={styles.activeIcon} source={require('../assets/smite.jpg')}
        />
      )
    } else if (event == "earth") {
      eventList.push(<Image
        style={styles.activeIcon} source={require('../assets/earth.jpg')}
        />
      )
    } else if (event == "heaven") {
      eventList.push(<Image
        style={styles.activeIcon} source={require('../assets/heaven.jpg')}
        />
      )
    } else if (event == "cooling") {
      eventList.push(<Image
        style={styles.activeIcon} source={require('../assets/cooling.jpg')}
        />
      )
    } else if (event == "warming") {
      eventList.push(<Image
        style={styles.activeIcon} source={require('../assets/warming.jpg')}
        />
      )
    }
  })
  return (eventList)
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    width: 500,
    height: 270
  },
  header: {
    height: 60,
    backgroundColor: '#151040',
    padding: 15,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
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
  

});

export default EventCard