import React, { Component } from 'react';
import { 
  View, 
  Alert, 
  Text, 
  TouchableHighlight, 
  ListView, 
  StyleSheet, 
  AppRegistry, 
  TextInput } from 'react-native';
import * as Progress from 'react-native-progress';

import Globals from '../globals';
import SectionHeader from './SectionHeader';
import Footer from './Footer';
import MeoVatChiTiet from './MeoVatChiTiet';

var styles = require('../styles/main');
var SQLite = require('react-native-sqlite-storage');
var listAllData = [];

export default class TraCuu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadScreen: false,
      dataSource: []
    }
  }

  // Go Screen
  gotoPage(componentName, screenName, data) {
    this.props.navigator.push({
      component: componentName, 
      name: screenName,
      props: { dataSend: data }
    });
  }

  // Call before render
  componentWillMount(){
    this.getDataDSMEOVAT();
  }

  // Get data listview
  getDataDSMEOVAT(){
    try {
      if(listAllData.length > 0){ 
        this.reloadScreen(listAllData);
        return; 
      }

      var sql = 'select * from MEOVAT';
      var params = [];
      var db = SQLite.openDatabase({name: Globals.dbName},() => {
        db.transaction((tx) => {
          tx.executeSql(sql, params, (tx, results) => {
            console.log('SUCCESS EXEC');

            var len = results.rows.length;
            for (let i = 0; i < len; i++) {
              var obj = {};
              obj.ID_MEOVAT = results.rows.item(i).ID_MEOVAT;
              obj.TEN = results.rows.item(i).TEN;
              obj.NOIDUNG = results.rows.item(i).NOIDUNG;
              obj.DANHMUC = results.rows.item(i).DANHMUC;
              obj.TEN_SEARCH = this.convertString(results.rows.item(i).TEN);

              listAllData[i] = obj;
            }
            this.reloadScreen(listAllData);
          }, (err) => { console.log(err.message) });
        });
      }, (err) => { console.log(err.message) });
    } catch (err) { }
  }

  // Convert string UTF-8
  convertString(str){
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    return str;
  }

  // Search data list
  searchData(searchText = ''){
    var listResult = [];
    searchText = searchText.toLowerCase();

    if(searchText == ''){
      this.reloadScreen(listAllData);
    }
    else{
      if((/[^\u0000-\u007f]/).test(searchText)){
        listResult = listAllData.filter((obj) => {
          return obj.TEN.toLowerCase().includes(searchText);
        });
        this.reloadScreen(listResult);
      }
      else {
        listResult = listAllData.filter((obj) => {
          return obj.TEN_SEARCH.includes(searchText);
        });
        this.reloadScreen(listResult);
      }
    }
  }

  // Reload data screen
  reloadScreen(data){
    const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
    const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`];
    const { dataBlob, sectionIds, rowIds } = this.formatData(data);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
      getSectionData,
      getRowData,
    });

    this.setState({
      loadScreen: true,
      dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds)
    });

    this.render();
  }

  // Format data
  formatData(data) {
    // We're sorting by alphabetically so we need the alphabet
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    // Need somewhere to store our data
    const dataBlob = {};
    const sectionIds = [];
    const rowIds = [];

    // Each section is going to represent a letter in the alphabet so we loop over the alphabet
    for (let sectionId = 0; sectionId < alphabet.length; sectionId++) {
      // Get the character we're currently looking for
      const currentChar = alphabet[sectionId];

      // Get users whose first name starts with the current letter
      // const users = data.filter((user) => user.name.first.toUpperCase().indexOf(currentChar) === 0);
      const users = data.filter((row) => row.TEN.toUpperCase().indexOf(currentChar) === 0);

      // If there are any users who have a first name starting with the current letter then we'll
      // add a new section otherwise we just skip over it
      if (users.length > 0) {
        // Add a section id to our array so the listview knows that we've got a new section
        sectionIds.push(sectionId);

        // Store any data we would want to display in the section header. In our case we want to show
        // the current character
        dataBlob[sectionId] = { character: currentChar };

        // Setup a new array that we can store the row ids for this section
        rowIds.push([]);

        // Loop over the valid users for this section
        for (let i = 0; i < users.length; i++) {
          // Create a unique row id for the data blob that the listview can use for reference
          const rowId = `${sectionId}:${i}`;

          // Push the row id to the row ids array. This is what listview will reference to pull
          // data from our data blob
          rowIds[rowIds.length - 1].push(rowId);

          // Store the data we care about for this row
          dataBlob[rowId] = users[i];
        }
      }
    }
    return { dataBlob, sectionIds, rowIds };
  }

  // Render Header
  _renderHeader(){
    return(
      <View style={styles.containerSearchBar}>
        <TextInput 
          style={styles.input}
          placeholder="Tìm kiếm..."
          onChangeText={(text) => this.searchData(text)} />
      </View>
    );
  }

  // Render Row
  _renderRow(data){
    return(
      <TouchableHighlight onPress={() => this.gotoPage(MeoVatChiTiet, Globals.ScrMeoVatChiTiet, data)}>
        <View style={styles.containerRow}>
          <Text style={styles.letter}>{data.TEN.charAt(0).toUpperCase()}</Text>
          <Text style={styles.content}>{data.TEN}</Text>
        </View>
      </TouchableHighlight>
    );
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
        <ListView
          style={styles.containerListView}
          dataSource={this.state.dataSource}
          renderHeader={() => this._renderHeader()}
          renderRow={(data) => this._renderRow(data)}
          renderFooter={() => <Footer />}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          renderSectionHeader={(sectionData) => <SectionHeader {...sectionData} />}
        />
      );
    }
  }
}