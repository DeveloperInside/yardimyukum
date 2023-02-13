import { View, Text, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import LoadListItem from 'components/custom/LoadListItem'
import Button from 'components/Button'
import { assetList } from 'assets/assetList'


const MalzemeListesi = ({ item, data }) => {
  const renderItem = () => <LoadListItem item={item} />

  return (
    <View style={styles.container} >
      <Text style={styles.header} >Malzeme Listesi</Text>
      <ScrollView style={styles.loadList} >
        <FlatList renderItem={renderItem} data={data} />
      </ScrollView>
      <View style={styles.bottom} >
        <TouchableOpacity style={styles.ekleBox} >
            <Image source={assetList.ekle} style={styles.ekle} />
        </TouchableOpacity>
        <View style={styles.btns} >
            <Button buttonStyle={[styles.btn, styles.iptal]} text="İptal" />
            <Button buttonStyle={[styles.btn, styles.hazir]} text="Hazır" />
        </View>
      </View>
    </View>
  )
}

export default MalzemeListesi
