import React from 'react';
import {View, Text} from 'react-native';
import styles from './FilterBadge.styles';

const FilterBadge = ({title, activeBadge, setActiveBadge}) => {
  const onBadgePress = () => {
    setActiveBadge(title);
    console.log('girdi');
  };

  return (
    <View
      style={activeBadge === title ? styles.containerActive : styles.container}
      onStartShouldSetResponder={onBadgePress}>
      <Text 
        style={activeBadge === title ? styles.titleActive : styles.title}>
        {title}
      </Text>
    </View>
  );
};

export default FilterBadge;
