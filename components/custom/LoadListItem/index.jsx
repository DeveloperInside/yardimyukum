import { View, Text } from 'react-native'
import React from 'react'
import { Input, Button } from 'components/componentList'
import styles from './styles'

const LoadListItem = ({ item = { name: 'Malzeme İsmi' } }) => {
  return (
    <View style={styles.container}>
        <Button
            text= {item.name}
            buttonStyle={styles.btn}
            textStyle={styles.txt}/>
        <Input style={styles.inpt}/>
    </View>
  )
}

export default LoadListItem