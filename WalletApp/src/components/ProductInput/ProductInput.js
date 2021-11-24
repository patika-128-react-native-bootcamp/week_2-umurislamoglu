import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Button from '../Button/Button';
import styles from './ProductInput.styles';

const ProductInput = () => {
  let product = {
    name: '',
    price: 0,
    date: Date.now(),
  };

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(null);

  console.log(productName);
  console.log(productPrice);

  return (
    <View style={{flex: 1}}>
      <View style={styles.inputPair}>
        <Text style={styles.inputLabel}>Name</Text>
        <TextInput
          autofocus
          style={styles.inputTextArea}
          onChangeText={setProductName}
        />
      </View>
      <View style={styles.inputPair}>
        <Text style={styles.inputLabel}>Price</Text>
        <TextInput
          autofocus
          style={styles.inputTextArea}
          onChangeText={setProductPrice}
          keyboardType="numeric"
        />
      </View>
      <Button title={'Add'} style={styles.addButton} />
    </View>
  );
};

export default ProductInput;
