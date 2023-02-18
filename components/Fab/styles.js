import { StyleSheet } from 'react-native'
import colors from 'styles/colors'
import commonStyles, { sizes } from 'styles/commonStyles'

const styles = StyleSheet.create({
  fab: {
    backgroundColor: colors.dark.button,
    width: sizes.maxi.xl,
    height: sizes.maxi.xl,
    borderRadius: sizes.maxi.xs,
    ...commonStyles.center
  },
  plus: {
    fontSize: sizes.maxi.lg,
    includeFontPadding: false,
    lineHeight: sizes.maxi.lg
  }
})

export default styles
