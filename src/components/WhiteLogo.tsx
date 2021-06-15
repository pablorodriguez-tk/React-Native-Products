import React from 'react';
import {Dimensions, Image, View} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const WhiteLogo = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={require('../assets/react-logo-white.png')}
        style={{width: windowWidth * 0.2, height: windowHeight * 0.1}}
      />
    </View>
  );
};
