import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/LoginScreen';
import {RegisterScreen} from '../screens/RegisterScreen';
import {ProtectedScreen} from '../screens/ProtectedScreen';
import {AuthContext} from '../context/authContext';
import {LoadingScreen} from '../screens/LoadingScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  const {status} = useContext(AuthContext);

  if (status === 'cheking') return <LoadingScreen />;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      {status === 'authenticated' ? (
        <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
      ) : (
        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
