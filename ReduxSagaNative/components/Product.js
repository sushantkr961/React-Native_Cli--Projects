/* eslint-disable prettier/prettier */
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from './store/action';

const Product = ({item}) => {
  const dispatch = useDispatch();
  const handleCart = cartItem => {
    // console.warn('cart added', cartItem);
    dispatch(addToCart(cartItem));
  };

  return (
    <View style={styles.item}>
      <View>
        <Image style={styles.img} source={{uri: item.image}} />
      </View>
      <View style={styles.details}>
        <Text style={styles.txt}>{item.name}</Text>
        <Text style={styles.txt}>Color: {item.color}</Text>
        <Text style={styles.txt}>Price: ₹ {item.price}.00</Text>
        <Button
          style={styles.btn}
          title="Add To Cart"
          onPress={() => handleCart(item)}
        />
      </View>
    </View>
    //     <View style={styles.item}>
    //     <View>
    //       <Image style={styles.img} source={{uri: item.image}} />
    //     </View>
    //     <View style={styles.details}>
    //       <Text style={styles.txt}>{item.title}</Text>
    //       <Text style={styles.txt}>{item.category}</Text>
    //       <Text style={styles.txt}>Price: ₹ {item.price * 80}.00</Text>
    //       <Button style={styles.btn} title="Add To Cart" />
    //     </View>
    //   </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  img: {height: 300, width: '100%'},
  txt: {
    fontSize: 26,
  },
  btn: {
    fontSize: 20,
  },
  item: {
    marginVertical: 20,
  },
  details: {
    alignItems: 'center',
  },
});
