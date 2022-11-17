import React from "react";
import {Text, Button, View, StyleSheet} from 'react-native';

function Home({navigation}) {
    return (
        <>
            <Text> 홈화면 추가 </Text>
            <Button 
                title = "Go to Layout" 
                onPress={() => navigation.navigate('Layout')}
            />
        </>

    );
}

export default Home