/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Lap = () => {
  return (
    <View style={styles.container}>
      <Text>Lap</Text>
    </View>
  );
};

export default Lap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
