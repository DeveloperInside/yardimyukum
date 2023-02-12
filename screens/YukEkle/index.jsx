import { View, SafeAreaView } from 'react-native'
import React from 'react'
import commonStyles from 'styles/commonStyles'
import { Text, Input, Button, Spacer } from 'components/componentList'
import { FAB } from 'react-native-paper'
import styles from './styles'

const YukEkle = () => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <View>
        <Text>YukEkle</Text>
      </View>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => console.log('Pressed')}
      />
    </SafeAreaView>
  )
}

export default YukEkle
