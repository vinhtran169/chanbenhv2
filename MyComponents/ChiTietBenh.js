import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  AppRegistry, 
  Image, 
  WebView } from 'react-native';
import Globals from '../globals';
import Dimensions from 'Dimensions';
import * as Progress from 'react-native-progress';

var styles = require('../styles/main');
var propsData = [];
var imageUri = '';
var imgTag = '';
var contentHtml = '';

export default class ChiTietBenh extends Component {
  constructor(props){
    super(props);

    Globals.DetectStringFormat();
    propsData = props.route.props.dataSend;

    this.state = { loadScreen: false }
  }

  // Call before render
  componentWillMount(){
    this.resizeImage();
  }

  //Set image content
  resizeImage(){
    let totalPaddingContainer = 40;
    let screenWidth = Dimensions.get('window').width - totalPaddingContainer;
    imageUri = (propsData.HINHANHMOTA != '' && propsData.HINHANHMOTA != null)? 'data:image/png;base64,' + propsData.HINHANHMOTA : '';

    contentHtml = propsData.MOTACHITIET;
    if (imageUri == ''){
      this.setState({ loadScreen: true });
      contentHtml = contentHtml.replace('ReplaceImageDetailContent', '');
    }
    else{
      Image.getSize(imageUri, (width, height) => {
        if (width > screenWidth){
          imgTag = '<div style="text-align:center;"><img src="{0}" width="{1}" /></div>'.format(imageUri, screenWidth.toString());
        }
        else if (width > screenWidth * 70/100){
          imgTag = '<div style="text-align:center;"><img src="{0}" width="{1}" /></div>'.format(imageUri, width);
        }
        else{
          imgTag = '<img src="{0}" width="{1}" align="left" />'.format(imageUri, width);
        }

        contentHtml = imgTag + contentHtml;

        this.setState({ loadScreen: true });
        this.render();
      });
    }
  }

  // Render main
  render() {
    if (!this.state.loadScreen){
      return (
        <View style={styles.containerProgress}>
          <Progress.CircleSnail style={styles.circleProgress} thickness={6} size={100} />
        </View>
      );
    }
    else {
      return (
        <View style={styles.detailContainer}>
          <View style={styles.detailTitleContainer}>
            <Text style={styles.detailTitle}>{propsData.TENBENH.toUpperCase()}</Text>
          </View>

          <WebView source={{html: contentHtml}} 
            style={styles.detailContentContainer}
            startInLoadingState={true}
            scalesPageToFit={true} />
        </View>
      );
    }
  }
}