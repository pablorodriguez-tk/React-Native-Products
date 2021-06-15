import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import {WhiteLogo} from '../components/WhiteLogo';
import {useForm} from '../hooks/useForm';
import {loginStyles} from '../theme/loginTheme';

interface Props extends StackScreenProps<any, any> {}

export const RegisterScreen = ({navigation}: Props) => {
  const {email, password, name, onChange} = useForm({
    name: '',
    email: '',
    password: '',
  });

  const onRegister = () => {
    console.log({name, email, password});
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: '#5856D6',
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={loginStyles.formContainer}>
        {/* Keyboard avoid view */}
        <WhiteLogo />
        <Text style={loginStyles.title}>Registro</Text>

        <Text style={loginStyles.label}>Nombre:</Text>
        <TextInput
          placeholder="Ingrese su nombre"
          placeholderTextColor="rgba(255,255,255,0.4)"
          underlineColorAndroid="white"
          style={[
            loginStyles.inputField,
            Platform.OS === 'ios' && loginStyles.inputFieldIos,
          ]}
          selectionColor="white"
          onChangeText={value => onChange(value, 'name')}
          value={name}
          onSubmitEditing={onRegister}
          autoCapitalize="words"
        />

        <Text style={loginStyles.label}>Email:</Text>
        <TextInput
          placeholder="Ingrese su email"
          placeholderTextColor="rgba(255,255,255,0.4)"
          keyboardType="email-address"
          underlineColorAndroid="white"
          style={[
            loginStyles.inputField,
            Platform.OS === 'ios' && loginStyles.inputFieldIos,
          ]}
          selectionColor="white"
          onChangeText={value => onChange(value, 'email')}
          value={email}
          onSubmitEditing={onRegister}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Text style={loginStyles.label}>Password:</Text>
        <TextInput
          placeholder="Ingrese su Password"
          placeholderTextColor="rgba(255,255,255,0.4)"
          underlineColorAndroid="white"
          secureTextEntry={true}
          style={[
            loginStyles.inputField,
            Platform.OS === 'ios' && loginStyles.inputFieldIos,
          ]}
          selectionColor="white"
          onChangeText={value => onChange(value, 'password')}
          value={password}
          onSubmitEditing={onRegister}
          autoCapitalize="none"
          autoCorrect={false}
        />

        {/* Boton Register */}
        <View style={loginStyles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onRegister}
            style={loginStyles.button}>
            <Text style={loginStyles.buttonText}>Crear cuenta</Text>
          </TouchableOpacity>
        </View>

        {/* Crear una nueva cuenta */}

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.replace('LoginScreen')}
          style={loginStyles.buttonReturn}>
          <Text style={loginStyles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
