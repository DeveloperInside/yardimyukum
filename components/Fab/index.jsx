import { TouchableOpacity } from 'react-native'
import React from 'react'
import Text from 'components/Text'
import styles from './styles'

const Fab = ({ onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.fab, style]} onPress={onPress}>
      <Text style={styles.plus}>+</Text>
    </TouchableOpacity>
  )
}

export default Fab
