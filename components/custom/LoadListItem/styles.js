import { StyleSheet } from 'react-native'
import colors from 'styles/colors'
import commonStyles, { sizes } from 'styles/commonStyles'
import fonts from 'styles/fonts'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark.primary,
    flexDirection: 'row',
    margin: 8
  },
  button: {
    flexGrow: 1,
    marginRight: sizes.general.ms,
    minWidth: '30%'
  },
  buttonText: {
    textAlign: 'left'
  },
  input: {
    minWidth: '30%',
    textAlign: 'right',
    color: colors.dark.text,
    borderWidth: 1,
    borderColor: colors.dark.border,
    paddingRight: sizes.general.md,
    ...commonStyles.radius,
    ...fonts.input
  }
})

export default styles
