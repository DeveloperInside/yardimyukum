import { TouchableOpacity } from 'react-native'
import React from 'react'
import Text from 'components/Text'
import styles from './styles'

const Button = props => {
  const { text, buttonStyle, textStyle } = props

  return (
    <TouchableOpacity {...props} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button
