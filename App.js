import React from "react";
import { Button, ScrollView, View, StyleSheet, Text, Image, ImageBackground } from "react-native";
import Constants from "expo-constants";

const App = () =>{
  return(
    <>
    <View style={{paddingTop:Constants.statusBarHeight}}></View>
    <View style={[styles.container,styles.playingSpace]}>
      <Text>모바일 프로그래밍 첫번째 과제입니다. 지금까지 배웠던 내용 제출하겠습니다.</Text>
      <Image source={require('./assets/favicon.png')}/>
      <ImageBackground
        style={{width:300, height:300}}
        source={{
            uri:'https://file.mk.co.kr/meet/neds/2022/06/image_readtop_2022_549403_16559483315084786.jfif'
          }}
          >
            <View>
              <Text>안녕 난 츄야!</Text>
            </View>

       </ImageBackground>
    </View>
    <ScrollView style={styles.container}>
      <View style={[styles.controlSpace]}>
        <View style={[styles.buttonView]}>
          <Button title="모"/>
        </View>
        <View style={[styles.buttonView]}>
          <Button title="바"/>
        </View>
        <View style={[styles.buttonView]}>
          <Button title="일"/>
        </View>
        <View style={[styles.buttonView]}>
          <Button title="프"/>
        </View>
        <View style={[styles.buttonView]}>
          <Button title="로"/>
        </View>
        <View style={[styles.buttonView]}>
          <Button title="!"/>
        </View>

      </View>

    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    height:'50%'
  },
  playingSpace:{
    backgroundColor: "white",
    borderColor:"pink",
    borderWidth:3
  },
  controlSpace:{
    backgroundColor:'pink',
    flexDirection:'row',
    flexWrap:1
  },
  buttonView: {
    width:'50%',
    padding: 15
  }

});

export default App;