import React, {useState} from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';
import FilterBadge from './components/Badge/FilterBadge';
import styles from './App.styles';
import ProductInput from './components/ProductInput/ProductInput';
import ProductList from './components/ProductList/ProductList';

const App = () => {
  const [activeBadge, setActiveBadge] = useState('');

  const badgeTitles = ['Artan Fiyat', 'Azalan Fiyat', 'Tarih'];

  return (
    <SafeAreaView style={styles.appContainer}>
      <ScrollView>
        <View style={styles.buttonContainer}>
          {badgeTitles.map(titleItem => {
            return (
              <FilterBadge
                title={titleItem}
                activeBadge={activeBadge}
                setActiveBadge={setActiveBadge}
              />
            );
          })}
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
