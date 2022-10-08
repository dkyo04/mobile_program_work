import React from "react";
import { Button, View, ScrollView, StyleSheet } from "react-native";

const App = () => {
  return (<>
    <View style={[styles.container, styles.playingSpace]}>

    </View>
    <ScrollView style={[styles.container]}>
    <View style={[styles.controlSpace]}>
          <Button title="CHANGE FLEX DIRECTION"/>
          <Button title="CHANGE JUSTIFY CONTENT"/>
          <Button title="CHANGE ALIGN ITEMS"/>
          <Button title="CHANGE DIRECTION"/>
          <Button title="CHANGE FLEX WRAP"/>
          <Button title="ADD SQUARE"/>
          <Button title="DELETE SQUARE"/>
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