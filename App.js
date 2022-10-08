import React from "react";
import { Button, View, ScrollView, StyleSheet, Text, Image, ImageBackground } from "react-native";
import Constants from 'expo-constants';

const App = () => {
  return (<>
    <View style={{paddingTop:Constants.statusBarHeight}}></View>
    <View style={[styles.container, styles.playingSpace]}>
      <Text>모바일 프로그래밍.</Text>
      <Text>즐겁다 항상.</Text>
      
      <Image source={require('./assets/favicon.png')}/>
      <ImageBackground
        style={{width:400, height:400}}
        source={{
          uri: 'https://t1.daumcdn.net/cfile/tistory/99CC093D5B215BF41E',
        }}
      > 
        <Text>
          안녕 난 츄야!
        </Text>
      
      </ImageBackground>
    </View>

    <ScrollView style={[styles.container]}>
      <View style = {[styles.controlSpace]}>
        <View style={[styles.buttonView]}>
          <Button title="1" />
        </View>
        <View style={[styles.buttonView]}>
          <Button title="2" />
        </View>
        <View style={[styles.buttonView]}>
          <Button title="3" />
        </View>
        <View style={[styles.buttonView]}>
          <Button title="4" />
        </View>
        <View style={[styles.buttonView]}>
          <Button title="5" />
        </View>
        <View style={[styles.buttonView]}>
          <Button title="6" />
        </View>
        <View style={[styles.buttonView]}>
          <Button title="7" />
        </View>
      </View>
      

    </ScrollView>

  </>);
}

const styles = StyleSheet.create({
  container: {
    height: '50%'
  },
  playingSpace: {
    backgroundColor: 'white',
    borderColor: 'blue',
    borderWidth: 3

  },
  controlSpace: {
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  buttonView: {

    width:'50%',
    padding:10
  }
});



export default App;