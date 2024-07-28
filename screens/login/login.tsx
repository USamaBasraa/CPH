import React from 'react';
import { Text, View, Image, Button, TouchableOpacity, Alert } from 'react-native';
import styles from './style';

const Login = () => {
  const handlePress = () => {
    Alert.alert('Button Pressed!', 'You clicked the button!');
  };
  return (
    <View style={styles.container}>
      <View>
          <Image
            source={require('../../assets/images/logo.jpg')}
            style={styles.logo}
          />
      </View>
      <View>
        <View>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>User Name</Text>
      </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity style={[styles.button, styles.button1]} onPress={handlePress}>
        <Text style={styles.buttonText}>Password</Text>
      </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
