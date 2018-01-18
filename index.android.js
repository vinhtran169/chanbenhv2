/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry, 
  StyleSheet, 
  Text, 
  View, 
  StatusBar, 
  Image, 
  Button, 
  Alert, 
  TouchableHighlight, 
  Navigator} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } from 'react-native-nav';

import Globals from './globals';
import TraCuu from './MyComponents/TraCuu';
import MeoVat from './MyComponents/MeoVat';
import ChanBenh from './MyComponents/ChanBenh';

var styles = require('./styles/main');

//export default
class Home extends Component {
  constructor(props) {
    super(props);
    // height of advertising banner
    this.state = { footHeight: 50 };

    Globals.openDB();
  }

  // Pop/Push navigator
  gotoPage(componentName, screenName) {
    this.props.navigator.push({
      component: componentName,
      name: screenName,
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableHighlight style={styles.row1} onPress={() => this.gotoPage(TraCuu, Globals.ScrTraCuu)} >
            <View style={{ flex: 1, flexDirection: 'row', }}>
              <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column', marginLeft: 5 }} >
                <Image source={require('./images/doctor1.png')} style={styles.ImageMedium}></Image>
              </View>
              <View style={{ flex: 2, justifyContent: 'center', flexDirection: 'column' }} >
                <Text style={styles.fullWidthButtonText}>TRA CỨU BỆNH</Text>
                <Text style={styles.childText}>Tra cứu bệnh lí và cách chữa trị</Text>
              </View>
              <View style={{ flex: 0.5, justifyContent: 'center', flexDirection: 'column' }} >
                <EvilIcons name="arrow-right" size={40} color='white' />
              </View>
            </View>
          </TouchableHighlight>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableHighlight style={styles.row2} onPress={() => this.gotoPage(ChanBenh, Globals.ScrChanBenh)} >
            <View style={{ flex: 1, flexDirection: 'row', }}>
              <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column', marginLeft: 2 }} >
                <Image source={require('./images/search4.png')} style={styles.ImageLarger}></Image>
              </View>
              <View style={{ flex: 2, justifyContent: 'center', flexDirection: 'column' }} >
                <Text style={styles.fullWidthButtonText}>CHẨN BỆNH</Text>
                <Text style={styles.childText}>Chẩn đoán bệnh dựa trên triệu chứng</Text>
              </View>
              <View style={{ flex: 0.5, justifyContent: 'center', flexDirection: 'column' }} >
                <EvilIcons name="arrow-right" size={40} color='white' />
              </View>
            </View>
          </TouchableHighlight>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableHighlight style={styles.row3} onPress={() => this.gotoPage(MeoVat, Globals.ScrMeoVat)}>
            <View style={{ flex: 1, flexDirection: 'row', }}>
              <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column', marginLeft: 2 }} >
                <Image source={require('./images/test2.png')} style={styles.ImageSmall}></Image>
              </View>
              <View style={{ flex: 2, justifyContent: 'center', flexDirection: 'column' }} >
                <Text style={styles.fullWidthButtonText}>MẸO VẶT</Text>
                <Text style={styles.childText}>Tổng hợp mẹo vặt bốn phương</Text>
              </View>
              <View style={{ flex: 0.5, justifyContent: 'center', flexDirection: 'column' }} >
                <EvilIcons name="arrow-right" size={40} color='white' />
              </View>
            </View>
          </TouchableHighlight>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableHighlight style={styles.row4} onPress={() => Alert.alert('Alert Title', 'khon co chi')}>
            <View style={{ flex: 1, flexDirection: 'row', }}>
              <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column', marginLeft: 2 }} >
                <Image source={require('./images/info.png')} style={styles.ImageSmall}></Image>
              </View>
              <View style={{ flex: 2, justifyContent: 'center', flexDirection: 'column' }} >
                <Text style={styles.fullWidthButtonText}>TRA CỨU THUỐC</Text>
                <Text style={styles.childText}>Tra cứu thông tin, các thành phần thuốc</Text>
              </View>
              <View style={{ flex: 0.5, justifyContent: 'center', flexDirection: 'column' }} >
                <EvilIcons name="arrow-right" size={40} color='white' />
              </View>
            </View>
          </TouchableHighlight>
        </View>

        <View style={{ flexDirection: 'row', height: this.state.footHeight }}>
          <TouchableHighlight style={styles.row5} onPress={() => this._navigate()}>
            <Image source={require('./images/ad.png')}></Image>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    var NavigationBarRouteMapper = {
      LeftButton: (route, navigator, index, navState) => {
        return (
          <NavButton style={styles.containerButtonLeft} onPress={() => navigator.pop()}>
            <Icon name="ios-arrow-back" size={40} color='black' />
          </NavButton>
        );
      },

      RightButton: (route, navigator, index, navState) => {
        return (
          <NavButton style={styles.containerButtonRight}>
              <Icon name="ios-menu" size={30} color='black' />
          </NavButton>
        );
      },

      Title: (route, navigator, index, navState) => {
        return (
          <NavTitle  style={styles.navTitle}>
            <Text>{route.name}</Text>
          </NavTitle>
        );
      }
    };

    return (
      <Navigator
        initialRoute={{ name: 'HOME', component: Home, index: 0 }}
        renderScene={(route, navigator) => {
          if (route.component) {
            return React.createElement(route.component, { ...this.props, ...route.passProps, navigator, route });
          }
        }}
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navbarContainer}
            navigationStyles={Navigator.NavigationBar.StylesIOS}
            routeMapper={NavigationBarRouteMapper} />
        }
      />
    );
  }
}

AppRegistry.registerComponent('ChanBenh', () => App);
