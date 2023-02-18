import { View, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import commonStyles from 'styles/commonStyles'
import { Text, Fab, LoadListItem, LoadModal } from 'components/componentList'
import styles from './styles'
import testData from 'testDB'

const YukEkle = () => {
  const renderItem = ({ item }) => {
    return (
      <LoadListItem
        name={item.product_name}
        count={item.count}
        onPress={() => {
          console.log(item)
        }}
      />
    )
  }

  return (
    <SafeAreaView style={commonStyles.container}>
      <View>
        <Text>YukEkle</Text>
      </View>
      <FlatList data={testData} renderItem={renderItem} />
      <Fab style={styles.fab} onPress={() => console.log('Pressed')} />
      <LoadModal item={testData[0]} isOpen={false} />
    </SafeAreaView>
  )
}

export default YukEkle
