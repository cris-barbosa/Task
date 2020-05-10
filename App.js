/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ScrollView,View,Text,Image,ImageBackground} from 'react-native';

import TaskList from './components/TaskList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      test: 'test',
    };
  }

  render() {
    const logo = {
      uri: 'https://reactnative.dev/img/tiny_logo.png',
      width: 64,
      height: 64
    };

    const image = require('./img/image.jpg')

    return (
      <View style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column'
      }}>
        <ImageBackground source={image} style={{
          flex: 0.3,
          resizeMode: "cover",
          justifyContent: "center",
          paddingHorizontal: 16,
          paddingVertical: 16,
        }}>
          <Image source={logo} />
          <Text>ASD 123</Text>
        </ImageBackground>
        <TaskList />
      </View>
    );
  }
}

export default App;
