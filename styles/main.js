
'use strict';
var React = require('react-native');

var {
  StyleSheet,
  Navigator,
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 50,
    // marginTop: Navigator.NavigationBar.Styles.General.TotalNavHeight,
  },
  statusBar: {
    backgroundColor: '#3343BD',
  },
  navBar: {
    backgroundColor: '#8C4648',
  },
  title: {
    color: 'white',
  },
  navGroup: {
    justifyContent: 'center',
  },
  navButton: {
    flex: 1,
  },
  inputsContainer: {
    flex: 1
  },
  row1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#E45454',

  },
  row2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#598B7F'
  },
  row3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#525E6A'
  },
  row4: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F3AD2E'
  },
  row5: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  fullWidthButtonText: {
    fontSize: 24,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold'
  },
  childText: {
    fontSize: 18,
    color: 'white',
  },
  childTitleTextBlue: {
    fontSize: 15,
    color: '#419df4',
    fontWeight: 'bold',
    marginTop: 2,
    marginLeft:5, 
  },
  childTitleTextRedRight: {
    fontSize: 12,
    color: 'red',   
    marginTop: 5,
    marginRight:2, 
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    
  },
  childTitleButtonRedRight: {
    fontSize: 12,
    color: 'red',   
    marginTop: 2,
    marginRight:2, 
    backgroundColor: 'white'
  },
  ImageSmall: {
    width: 70,
    height: 68,
  },
  ImageMedium: {
    width: 70,
    height: 80,
  },
  ImageLarger: {
    width: 90,
    height: 100,
  },
  ImageNav: {
    width: 70,
    height: 70,
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
  rowText: {
    marginRight: 20,
  },
  row: {
    flexDirection: "row",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  barText: {
    backgroundColor: "transparent",
    color: "#FFF",
    fontSize: 30,
  },

  /*=============== Style q_thinh ==============*/
  //Navigator.NavigationBar
  navbarContainer: {
    height: 70,
    backgroundColor: '#8C4648',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
    
  },

  containerButtonLeft:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 5,
  },

  containerButtonRight:{
    justifyContent: 'center',
    flex: 1,
    marginRight: 10,
    marginTop: 5,
  },

  navTitle: {
    position: 'absolute',
    top: 15,
    left: 0,
    right: 0,
    alignItems: 'center',
    color: 'white',
  },

  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },

  containerListView: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
  },

  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#8E8E8E',
  },

  containerSearchBar: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C1C1C1',
  },

  input: {
    height: 40,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },

  circleProgress:{
    alignItems: 'center',
  },

  containerProgress: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  containerRow: {
    flex: 1,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  content: {
    flex: 9,
    fontSize: 16,
  },

  letter: {
    flex: 1,
    color: '#333',
  },

  detailContainer: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
  },

  detailTitleContainer: {
    backgroundColor: '#ccc',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },

  detailTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },

  detailImageContainer: {
    alignItems: 'center',
  },

  detailImage: {
    width: 100,
    height: 100,
  },

  detailContentContainer:{
    margin: 10,
    paddingBottom: 30,
  },

  animatedContainer: {
    padding: 10,
  },

  animatedBorderStyle:{
    height: null,
    borderColor:'#DDD',
    borderRadius: 5,
    borderWidth: 5,
  },

  touchAnimateStyle:{
    marginBottom: 10,
    borderRadius: 10,
  },

});