import { View } from 'react-native'
import React from 'react'
import { sizes } from 'styles/commonStyles'

const Spacer = ({ size = sizes.general.md }) => {
  return <View style={{ width: size, height: size }} />
}

export default Spacer
