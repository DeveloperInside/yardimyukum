import { StyleSheet } from 'react-native'
import colors from 'styles/colors'
import commonStyles from 'styles/commonStyles'
import fonts from 'styles/fonts'

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.dark.button,
    justifyContent: 'center',
    ...commonStyles.radius,
    ...commonStyles.paddingButton
  },
  text: {
    textAlign: 'center',
    ...fonts.button
  }
})

export default styles
