import React from 'react'
import { View , Text } from 'react-native'
import styles from "./FilterBadge.styles"

const FilterBadge = ({title, active}) => {
    return (
        <View style={active===true?styles.containerActive:styles.container}>
            <Text style={active===true?styles.titleActive:styles.title}>{title}</Text>
        </View>
    )
}

export default FilterBadge
