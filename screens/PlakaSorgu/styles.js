import { StyleSheet } from 'react-native'
import commonStyles, { sizes } from 'styles/commonStyles'
import fonts from 'styles/fonts'

const styles = StyleSheet.create({
  innerContainer: {
    alignContent: 'center',
    margin: sizes.maxi.sm,
    ...commonStyles.container
  },
  header: {
    textAlign: 'center',
    ...fonts.header
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    flexGrow: 1,
    flexBasis: 1
  }
})

export default styles
