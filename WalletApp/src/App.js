import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';
import FilterBadge from './components/Badge/FilterBadge';
import styles from './App.styles';
import ProductInput from './components/ProductInput/ProductInput';
import ProductList from './components/ProductList/ProductList';

const App = () => {
  const [activeBadge, setActiveBadge] = useState('');
  const [productData, setProductData] = useState([]);
  const [renderFlag, setRenderFlag] = useState(false);

  //Badge items
  const badgeTitles = ['Artan Fiyat', 'Azalan Fiyat', 'Tarih'];

  const onBadgePress = (title) => {
    setActiveBadge(title);
  };

  const sortByBadge = (data, keyword) => {
    let sorted;
console.log(keyword)
    switch (keyword) {
      case 'Artan Fiyat':
        sorted = data.sort((a, b) => {
          return a.price - b.price;
        });
        break;
      case 'Azalan Fiyat':
        sorted = data.sort((a, b) => {
          return b.price - a.price;
        });
        break;
      case 'Tarih':
        sorted = data.sort((a, b) => {
          return b.date - a.date;
        });
        break;
      default:
        sorted = data;
    }
    console.log(sorted)
    setRenderFlag(prevState=>!prevState)
    return sorted;
  };

  useEffect(() => {
    console.log(activeBadge)
    let sortedProducts = sortByBadge(productData, activeBadge)
    console.log(sortedProducts)
    setProductData(sortedProducts);
    console.log(productData)
  }, [activeBadge]);

  return (
    <SafeAreaView style={styles.appContainer}>
      <ScrollView  style={styles.appContainer} keyboardShouldPersistTaps="always">
        <View style={styles.buttonContainer}>
          {badgeTitles.map((titleItem, idx) => {
            return (
              <FilterBadge
                key={idx}
                title={titleItem}
                activeBadge={activeBadge}
                onBadgePress = {onBadgePress}

              />
            );
          })}
        </View>
        <View style={styles.productContainer}>
         <ProductList
            productData={productData}
            activeBadge={activeBadge}
            renderFlag={renderFlag}
          />
        </View>
        <View style={styles.inputContainer}>
          <ProductInput
            productData={productData}
            activeBadge={activeBadge}
            setProductData={setProductData}
            sortByBadge={sortByBadge}
            activeBadge={activeBadge}
          />
        </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default App;
