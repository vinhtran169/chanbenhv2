import React, { Component } from 'react';
import { 
  AppRegistry, 
  StyleSheet, 
  ListView, 
  Text, 
  View, 
  TextInput, 
  Alert,
  TouchableHighlight,
  Button} from 'react-native';
import AnimatedBar from "react-native-animated-bar";
import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';
import ChiTietBenh from './ChiTietBenh';

var styles = require('../styles/main');
var propsData;

export default class ChanBenhKetQua extends Component {
  constructor(props) {
    super(props)  
    propsData = props.route.props.dataSend;

    this.state = {
      progress1: 0.9,
      progress2: 0.7,
      progress3: 0.2,
    }
  }

  // Go Screen
  gotoPage(componentName, screenName, dataSend) {
    this.props.navigator.push({
      component: componentName, 
      name: screenName,
      props: { dataSend: dataSend }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.center]}>
          <Text>BẠN CÓ NHỮNG TRIỆU CHỨNG CỦA BỆNH</Text>
        </View>

        <View style={styles.animatedContainer}>
          <TouchableHighlight style={styles.touchAnimateStyle} onPress={() => Alert.alert('Alert Title', '01')}>
            <View>
              <AnimatedBar
                progress={this.state.progress1}
                style={styles.animatedBorderStyle}
                borderColor='#DDD'
                barColor='#FF0000'
                duration={500}>
                <View style={[styles.center]}>
                  <Text style={[styles.barText]}>
                    PARKISON {Math.round(this.state.progress1 * 100)}%
                  </Text>
                </View>
              </AnimatedBar>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.touchAnimateStyle} onPress={() => Alert.alert('Alert Title', '02')}>
            <View>
              <AnimatedBar
                progress={this.state.progress2}
                style={styles.animatedBorderStyle}
                borderColor='#DDD'
                barColor="#FFA125"
                duration={500}>
                <View style={[styles.center]}>
                  <Text style={[styles.barText]}>
                    THAN KINH TAY {Math.round(this.state.progress2 * 100)}%
                  </Text>
                </View>
              </AnimatedBar>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.touchAnimateStyle} onPress={() => Alert.alert('Alert Title', '03')}>
            <View>
              <AnimatedBar
                progress={this.state.progress3}
                style={styles.animatedBorderStyle}
                borderColor='#DDD'
                barColor='#3399FF'
                duration={500}>
                <View style={[styles.center]}>
                  <Text style={[styles.barText]}>
                    ROI LOAN {Math.round(this.state.progress3 * 100)}%
                  </Text>
                </View>
              </AnimatedBar>
            </View>
          </TouchableHighlight>
        </View>

        <View>
          <View><Text>Với các triệu chứng: </Text></View>
          <View><Text>nôn mửa, khó ngủ, run tay chân khó kiểm soát.nôn mửa, khó ngủ, run tay chân khó kiểm soát.</Text></View>
        </View>

        <View style={[styles.row]}>
        <Text>Kha nang cao ban da mac PARKISON</Text></View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginTop: 5}}>    
        
            <View style={{ flex: 0.5}}></View>
            <View style={{ flex: 1, flexDirection: 'column', alignItems:'center', width:50, marginTop:5 }} >
                  <RoundButton
                          text="Xem chi tiet"
                          type="primary"
                          shape="rectangle"
                          backgroundColors={['#8C4648', '#FF0000']}
                          gradientStart={{ x: 0.5, y: 1 }}
                          gradientEnd={{ x: 1, y: 1 }}                          
                          onPress={() => this.gotoPage(ChiTietBenh, 'CHI TIẾT', 'Parkinson la mot benh rung chan tay khong kiem soat')}         
                        >
                  </RoundButton>
                </View>   
            <View style={{ flex: 0.5}}></View>
          </View>
      </View>
    );
  }
}