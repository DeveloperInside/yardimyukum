import React from 'react'
import { Text as DefText } from 'react-native'
import styles from './styles'

const Text = props => {
  return (
    <DefText style={[styles.text, props.style]}>{props.children}</DefText>
  )
}

export default Text
