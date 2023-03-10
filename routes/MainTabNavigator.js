import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Layout from '../screens/Layout';
import Weather from '../screens/Weather';
import Calculator from '../screens/Calculator';
import YoutubeViewer from '../screens/YoutubeViewer';
import Game from '../screens/Game';


const Nav = createBottomTabNavigator();

function MainTabNavigator() {
    return (
        <NavigationContainer>
            <Nav.Navigator initialRouteName='Home'>
                <Nav.Screen name = "Layout" component={Layout} options={{title: '처음 Layout'}}/>
                <Nav.Screen name = "Home" component={Home} options={{title: '추가 Home'}}/>
                <Nav.Screen name = "Weather" component={Weather} options={{title: '날씨조회화면'}}/>
                <Nav.Screen name = "Calculator" component={Calculator} options={{title: '계산기'}}/>
                <Nav.Screen name = "Youtube" component={YoutubeViewer} options={{title: 'YOUTUBE'}}/>
                <Nav.Screen name = "Game" component={Game} options={{title: 'Game'}}/>

            </Nav.Navigator>
        </NavigationContainer>
    );
}

export default MainTabNavigator;