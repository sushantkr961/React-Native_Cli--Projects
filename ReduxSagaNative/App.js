import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import Product from './components/Product';

const App = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const url = 'https://fakestoreapi.com/products';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        {products.map(item => (
          <Product key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    padding: 10,
  },
});
