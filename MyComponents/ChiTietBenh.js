import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  AppRegistry, 
  Image, 
  WebView } from 'react-native';
import Globals from '../globals';

var styles = require('../styles/main');
var propsData;

export default class ChiTietBenh extends Component {
  constructor(props){
    super(props);
    propsData = props.route.props.dataSend;
  }

  // Go Screen
  gotoPage(componentName, screenName) {
    this.props.navigator.push({ component: componentName, name: screenName });
  }

  // Render main
  render() {
    return (
      <View style={styles.detailContainer}>
        <View style={styles.detailTitleContainer}>
          <Text style={styles.detailTitle}>{propsData.TENBENH.toUpperCase()}</Text>
        </View>

        <View style={styles.detailImageContainer}>
          <Image source={require('../images/doctor.png')} style={styles.detailImage}></Image>
        </View>

        <WebView source={{html: propsData.MOTACHITIET}} 
          style={styles.detailContentContainer}
          startInLoadingState={true}
          scalesPageToFit={true} />
      </View>
    );
  }
}