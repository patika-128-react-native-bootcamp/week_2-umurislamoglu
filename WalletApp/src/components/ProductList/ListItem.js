import React from 'react';
import {View, Text} from 'react-native';
import styles from './ListItem.styles';

const ListItem = ({productName, price}) => {
  return (
    <View style={styles.listItemContainer}>
      <Text>{productName}</Text>
      <Text style={styles.priceText}>{price} TL</Text>
    </View>
  );
};

export default ListItem;
