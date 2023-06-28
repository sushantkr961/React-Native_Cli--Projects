/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  const cartData = useSelector(state => state.reducer);
  console.warn(cartData);

  useEffect(() => {
    setCartCount(cartData.length);
  }, [cartData]);

  return (
    <View style={styles.container}>
      <Text style={styles.cart}>Cart: {cartCount}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'tomato',
    padding: 10,
  },
  cart: {
    fontSize: 30,
    textAlign: 'right',
  },
});
