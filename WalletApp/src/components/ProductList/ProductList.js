import React from 'react';
import {FlatList, View} from 'react-native';
import ListItem from './ListItem';
import styles from './ProductList.styles';



const ProductList = ({productData}) => {
  const renderItems = ({item}) => (
    <ListItem productName={item.name} price={item.price} />
  );

  return (
    <View style={styles.flatListContainer}>
      <FlatList
        data={productData}
        renderItem={renderItems}
        keyExtractor={product => product.id}
      />
    </View>
  );
};

export default ProductList;
