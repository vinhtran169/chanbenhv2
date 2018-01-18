import React, { Component } from 'react';
import { 
  AppRegistry, 
  StyleSheet, 
  ListView, 
  Text, 
  View, 
  TextInput, 
  Button, 
  TouchableHighlight, 
  Alert} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import TokenAutocomplete from 'react-token-autocomplete';
import AutoTags from 'react-native-tag-autocomplete';
import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';

import Globals from '../globals';
import ChanBenhKetQua from '../MyComponents/ChanBenhKetQua';
import demoData from './../data';

var styles = require('../styles/main');
var SQLite = require('react-native-sqlite-storage');

export default class ChanBenh extends Component {
  constructor(props) {
    super(props)
    
    // const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
    // const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`];

    // const ds = new ListView.DataSource({
    //   rowHasChanged: (r1, r2) => r1 !== r2,
    //   sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    //   getSectionData,
    //   getRowData,
    // });

    this.state = {
      tags: ["vinh"],
      suggestions : [ {name:'Mickey Mouse'},{name:'Vinh'}, {name:'Mickey Halu'},],
      tagsSelected : [],
      download: 'download',
    }

    this.download = this.download.bind(this);
  }

  handleAddition = (suggestion) => {  
    if (this.state.tagsSelected.indexOf(suggestion) === -1) {
      // element doesn't exist in array
      this.setState({ tagsSelected: this.state.tagsSelected.concat([suggestion]) });
    }
  }

  handleDelete = (index) => {
    let tagsSelected = this.state.tagsSelected;
    tagsSelected.splice(index, 1);
    this.setState({ tagsSelected });
  }

  handleDeleteAll(){    
    this.setState({ tagsSelected: [] });
  }

  download() {
    this.gotoPage();
  }

  // Go Screen
  gotoPage() {
    this.props.navigator.push({
      component: ChanBenhKetQua, 
      name: Globals.ScrChanBenhKetQua,
      props: { dataSend: this.state.tagsSelected }
    });
  }

  // onChangeTags = (tags) => {
  //   this.setState({
  //     tags,
  //   });
  // }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', height:30 }}>
            <View style={{ flex: 2, flexDirection: 'row', marginLeft: 5}}>             
              <Text style={styles.childTitleTextBlue}>Các triệu chứng đã chọn</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end',}}>           
              <Text style={styles.childTitleTextRedRight} onPress={() => this.handleDeleteAll()}>XÓA TÁT CẢ</Text>
            </View>
        </View>

        <View style={{ flex: 1, flexDirection: 'row',}}>
          <View style={{ flex: 0.25, justifyContent: 'flex-start', flexDirection: 'column', marginLeft: 5}} >
              <EvilIcons name="search" size={40} color='red' />  
          </View>
          <View style={{ flex: 2, justifyContent: 'flex-start', flexDirection: 'column' }} >
            <View style={styles.autocompleteContainer}>
              <AutoTags                          
                suggestions={this.state.suggestions}
                tagsSelected={this.state.tagsSelected}
                handleAddition={this.handleAddition}
                handleDelete={this.handleDelete} 
                placeholder="thêm triệu chứng..." 
                autoFocus={false}                          
              />              
            </View>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end',}}>    
          <View style={{ flex: 0.5}}></View>
          <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'column', alignItems:'center', width:50, marginBottom:5 }} >
            <RoundButton
              type="primary"
              textStyle={{fontWeight:'bold',fontSize:20}}
              states={{
                download: {
                  text: 'Chẩn đoán',
                  backgroundColors: ['#4DC7A4', '#66D37A'],
                  onPress: this.download
                }
              }}
              buttonState={this.state.download}
            />
          </View>    
          <View style={{ flex: 0.5}}></View>
        </View>
      </View>
    );
  }
}