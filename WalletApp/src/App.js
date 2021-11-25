import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';
import FilterBadge from './components/Badge/FilterBadge';
import styles from './App.styles';
import ProductInput from './components/ProductInput/ProductInput';
import ProductList from './components/ProductList/ProductList';

const App = () => {
  const DATA = [
    {
      id: 1,
      name: 'aasd',
      price: 1,
      date:  1519211809934,
    },
    {
      id: 2,
      name: 'basdasd',
      price: 15,
      date:  1519211809935,
    },
    {
      id: 3,
      name: 'casdasd',
      price: 79,
      date:  1519211809936,
    },
    {
      id: 4,
      name: 'dasdasd',
      price: 78,
      date:  1519211809937,
    },
  ];

  const [activeBadge, setActiveBadge] = useState('');
  const [productData, setProductData] = useState(DATA);

  //Badge items
  const badgeTitles = ['Artan Fiyat', 'Azalan Fiyat', 'Tarih'];

  //Function to sort product array
  const sortByBadge = (data, keyword) => {
    switch (keyword) {
      case 'Artan Fiyat':
        data.sort((a, b) => {
          return a.price - b.price;
        });
        break;
      case 'Azalan Fiyat':
        data.sort((a, b) => {
          return b.price - a.price;
        });
        break;
      case 'Tarih':
        data.sort((a, b) => {
          return b.date - a.date;
        });
        break;
      default:
        data;
    }
  };

  useEffect(() => {
    sortByBadge(DATA, activeBadge);
    setProductData(DATA)
  }, [activeBadge]);

  return (
    <SafeAreaView style={styles.appContainer}>
      <ScrollView>
        <View style={styles.buttonContainer}>
          {badgeTitles.map((titleItem, idx) => {
            return (
              <FilterBadge
                key={idx}
                title={titleItem}
                activeBadge={activeBadge}
                setActiveBadge={setActiveBadge}
              />
            );
          })}
        </View>
        <View style={styles.productContainer}>
          <ProductList productData={productData} />
        </View>
        <View style={styles.inputContainer}>
          <ProductInput />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
