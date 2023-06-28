/* eslint-disable prettier/prettier */
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeToCart} from './store/action';

const Product = ({item}) => {
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();
  const allCartItems = useSelector(state => state.reducer);

  useEffect(() => {
    // if (allCartItems && allCartItems.length) {
    //   allCartItems.forEach(element => {
    //     // console.warn(element);
    //     if (element.name === item.name) {
    //       setIsAdded(true);
    //     }
    //   });
    // }
    let result = allCartItems.filter(ele => {
      return ele.name === item.name;
    });
    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [allCartItems]);

  const handleCart = cartItem => {
    // console.warn('cart added', cartItem);
    dispatch(addToCart(cartItem));
  };

  const handleRemoveCart = cartItem => {
    // console.warn(cartItem);
    dispatch(removeToCart(cartItem.name));
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
        {isAdded ? (
          <Button
            style={styles.btn}
            title="Remove To Cart"
            onPress={() => handleRemoveCart(item)}
          />
        ) : (
          <Button
            style={styles.btn}
            title="Add To Cart"
            onPress={() => handleCart(item)}
          />
        )}
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
