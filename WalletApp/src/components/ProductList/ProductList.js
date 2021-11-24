import React from 'react';
import {FlatList, View} from 'react-native';
import ListItem from './ListItem';
import styles from './ProductList.styles';

const DATA = [
  {
    id: 1,
    name: 'aasd',
    price: 1,
  },
  {
    id: 2,
    name: 'basdasd',
    price: 15,
  },
  {
    id: 3,
    name: 'casdasd',
    price: 78,
  },
  {
    id: 4,
    name: 'dasdasd',
    price: 79,
  },
];

const ProductList = () => {
  const renderItems = ({item}) => (
    <ListItem productName={item.name} price={item.price} />
  );

  return (
    <View style={styles.flatListContainer}>
      <FlatList
        data={DATA}
        renderItem={renderItems}
        keyExtractor={product => product.id}
      />
    </View>
  );
};

export default ProductList;
