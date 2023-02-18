import { TextInput, View } from 'react-native'
import React from 'react'
import Button from 'components/Button'
import styles from './styles'

const LoadListItem = ({ name, count, onPress }) => {
  return (
    <View style={styles.container}>
      <Button
        text={name}
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
        onPress={onPress}
      />
      <TextInput value={count} style={styles.input} keyboardType="number-pad" />
    </View>
  )
}

export default LoadListItem
