import React from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';
import FilterBadge from './components/Badge/FilterBadge';
import styles from './App.styles';
import ProductInput from './components/ProductInput/ProductInput';
import ProductList from './components/ProductList/ProductList';

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <ScrollView>
        <View style={styles.buttonContainer}>
          <FilterBadge title={'Artan Fiyat'} active={true}/>
          <FilterBadge title={'Azalan Fiyat'} />
          <FilterBadge title={'Tarih'} />
        </View>
        <View style={styles.productContainer}>
          <ProductList />
        </View>
        <View style={styles.inputContainer}>
          <ProductInput />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
