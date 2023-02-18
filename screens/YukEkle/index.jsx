import { View, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import commonStyles from 'styles/commonStyles'
import { Text, Fab, LoadListItem, LoadModal } from 'components/componentList'
import styles from './styles'

const YukEkle = () => {
  const testData = [
    {
      class: 'Isınma',
      name: 'Battaniye',
      count: '900'
    },
    {
      class: 'Gıda',
      name: 'Kuru Gıda',
      count: '7000'
    },
    {
      class: 'İhtiyaç',
      name: 'Bebek bezi',
      count: '800'
    }
  ]

  const renderItem = ({ item }) => {
    return (
      <LoadListItem
        item={item}
        onPress={abc => {
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
