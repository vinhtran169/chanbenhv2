import React, { Component } from 'react'
import { View, ListView, Text, TouchableHighlight, TouchableOpacity, Alert } from 'react-native'

var styles = require('../css/style');

export default class MainList extends Component {
   render(){
      let data = this.props.dataSource;

      return (
         <View style={styles.listContainer}>
            <ListView
               dataSource = {data}
               renderRow = {(row) => this._renderRow(row)}
            />

            <TouchableOpacity style={styles.backButton} onPress={ () => this.props.navigator.pop() }>
               <Text>BACK</Text>
            </TouchableOpacity>
         </View>
      )
   }

   //Render row ListView
   _renderRow = (data) => {
      return(
         <TouchableHighlight onPress={() => Alert.alert('', data.title)}>
            <View style={[{backgroundColor:data.color}, styles.listItem]}>
               <View style={styles.block_column1}>
                  {/*<Text>{data.url}</Text>*/}
                  <Image source={require('./images/doctor.png')}/>
               </View>

               <View style={styles.block_column2}>
                  <Text>{data.title}</Text>
                  <Text>{data.descript}</Text>
               </View>

               <View style={styles.block_column3}>
                  <Text>BUTTON</Text>
               </View>
            </View>
         </TouchableHighlight>
      )
   }

  gotoPage(componentName, screenName) {
    this.props.navigator.push({ component: componentName, name: screenName });
  }

}