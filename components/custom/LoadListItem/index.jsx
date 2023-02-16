import { TextInput, View } from 'react-native'
import React from 'react'
import Button from 'components/Button'
import styles from './styles'

const LoadListItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <Button text={item.name} buttonStyle={styles.button} textStyle={styles.buttonText} onPress={onPress && onPress(item)}/>
      <TextInput value={item.count} style={styles.input}/>
    </View>
  )
}

export default LoadListItem
