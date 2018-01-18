import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  letter: {
    padding: 10,
    margin: 5,
    backgroundColor: '#ffde00',
    color: '#333',
    width: 40,
    height: 40,
    textAlign: 'center',

  }
});

const listColor = ['#ffde00', 'red', '#ffde00'];
const doubled = listColor.map((number) => number);

var orderColor = '#ffde00';

// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );

const Row = (props) => (
  <View style={styles.container}>
    <Text style={{
      padding: 10, margin: 5,
      color: '#333', width: 40, height: 40, textAlign: 'center',
    }}>
      {/* {`${props.name.first.charAt(0).toUpperCase()}`} */}
      {`${props.NAME.charAt(0).toUpperCase()}`}
    </Text>
    {/*<Image source={props.picture.large} style={styles.photo} />*/}
    <Text style={styles.text}>
      {/* {`${props.name.first} ${props.name.last}`} */}
      {`${props.NAME}`}
    </Text>
  </View>
);

export default Row;
