import { View } from 'react-native'
import React from 'react'
import { Text } from 'components/componentList'
import styles from './styles'
import { Autocomplete, AutocompleteItem } from '@ui-kitten/components'

const LoadModal = ({ item, isOpen }) => {
  const renderOption = (item, index) => (
    <AutocompleteItem key={index} title={item?.title} />
  )

  return (
    isOpen &&
    <View style={styles.container}>
      <View style={styles.modalCard}>
        <Text>Malzeme Sınıfı</Text>
        <Text>{item?.class}</Text>
        <Autocomplete>
        </Autocomplete>
        <Text>Malzeme Adı</Text>
        <Text>{item?.name}</Text>
      </View>
    </View>
  )
}

export default LoadModal
