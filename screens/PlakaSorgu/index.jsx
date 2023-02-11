import { View } from 'react-native'
import React from 'react'
import commonStyles, { sizes } from '../../styles/commonStyles'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import { Text, Input, Button, Spacer } from 'components/componentList'

const PlakaSorgu = () => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.header}>Yardım Yüküm</Text>
        <Spacer size={sizes.general.xl} />
        <Input label="Plaka" />
        <Spacer size={sizes.general.xl} />
        <View style={styles.buttonContainer}>
          <Button
            text="Yük Alıyorum"
            buttonStyle={styles.button}
            onPress={() => {
              console.log('button pressed')
            }}
          />
          <Spacer />
          <Button
            text="Araç Takip"
            buttonStyle={styles.button}
            onPress={() => {
              console.log('button pressed')
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default PlakaSorgu
