/* eslint-disable prettier/prettier */
import {Button, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './Header';
import Product from './Product';

const HomeScreen = ({navigation}) => {
  const products = [
    {
      id: 1,
      name: 'Samsung Mobile',
      color: 'White',
      price: 30000,
      image:
        'https://images.samsung.com/is/image/samsung/assets/in/home/S23-Ultra_Exclusive_Big_Tile_684x684_without.jpg?$684_684_JPG$',
    },
    {
      id: 2,
      name: 'Apple Mobile',
      color: 'Green',
      price: 130000,
      image:
        'https://www.apple.com/in/iphone-14-pro/images/key-features/hero/hero_deep_purple__dlhl8s8j6wk2_large_2x.jpg',
    },
    {
      id: 3,
      name: 'Nokia Mobile',
      color: 'White',
      price: 17000,
      image:
        'https://images.ctfassets.net/wcfotm6rrl7u/2UMzA3xHuHOlsW8qPAsYWF/eff50f3bc790c0d7792c6a9e6bd3cab9/nokia_C22-IN-DTC-Hero.png?w=881&h=881&fm=webp&q=88',
    },
    {
      id: 4,
      name: 'Oppo Mobile',
      color: 'Black',
      price: 40000,
      image:
        'https://th.bing.com/th?id=ODL.07cc2d87249dd144a40499d5d983cefd&w=94&h=125&c=7&rs=1&qlt=80&o=6&dpr=1.5&pid=RichNav',
    },
    {
      id: 5,
      name: 'Vivo Mobile',
      color: 'Moonlight',
      price: 25000,
      image:
        'https://th.bing.com/th?id=ODL.edacfe3e7bb1d23e59c22f881cb92710&w=146&h=146&c=7&rs=1&qlt=80&o=6&dpr=1.5&pid=RichNav',
    },
    {
      id: 6,
      name: 'Xiaomi Mobile',
      color: 'Pinik',
      price: 27000,
      image:
        'https://th.bing.com/th?id=ODL.bec0b57113b720e010152871b3a2ddeb&w=94&h=125&c=7&rs=1&qlt=80&o=6&dpr=1.5&pid=RichNav',
    },
    {
      id: 7,
      name: 'Realme Mobile',
      color: 'Blue',
      price: 20000,
      image:
        'https://www.bing.com/th?id=OIP.qepgiOgmhghcfv1SzZ-YzgHaHR&w=177&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    },
  ];

  // const [products, setProducts] = useState([]);

  // const getProducts = async () => {
  //   const url = 'https://fakestoreapi.com/products';
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   console.log(data);
  //   setProducts(data);
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <View style={styles.container}>
      <Button title="User List" onPress={() => navigation.navigate('Users')} />
      <Header />
      <ScrollView>
        {products.map(item => (
          <Product key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    padding: 10,
  },
});
