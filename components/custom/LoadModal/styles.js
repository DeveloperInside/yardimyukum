import { StyleSheet } from 'react-native'
import colors from 'styles/colors'
import commonStyles, { sizes } from 'styles/commonStyles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark.primary70,
    ...StyleSheet.absoluteFill,
    ...commonStyles.center
  },
  modalCard: {
    backgroundColor: colors.dark.primary,
    padding: sizes.general.md,
    ...commonStyles.border
  }
})

export default styles
