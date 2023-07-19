/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import Clock from '../components/Clock';
import Lap from '../components/Lap';
import Controller from '../components/Controller';
import {colors} from '../utilities/style';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={{flex: 45}}>
        <Clock />
      </View>
      <View style={{flex: 45}}>
        <Lap />
      </View>
      <View style={{flex: 10}}>
        <Controller />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
