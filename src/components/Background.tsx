import React from 'react';
import {Dimensions, View} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Background = () => {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: '#5856D6',
        top: -250,
        bottom: 0,
        width: windowWidth * 2.1,
        height: windowHeight * 1.6,
        transform: [{rotate: '-70deg'}],
      }}></View>
  );
};
