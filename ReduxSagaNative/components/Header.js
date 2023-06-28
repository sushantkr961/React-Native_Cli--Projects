/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.cart}>MobileHub</Text> */}
      <Text style={styles.cart}>Cart: 0</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  cart: {
    fontSize: 30,
    textAlign: 'right',
  },
});
