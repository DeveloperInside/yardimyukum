import { StyleSheet } from 'react-native'
import commonStyles, { sizes } from 'styles/commonStyles'


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: sizes.general.ms,
    marginVertical: sizes.general.xs,
    ...commonStyles.center,
    ...commonStyles.rowCenter
  },
  btn: {
    marginRight: sizes.general.xs,
    paddingVertical: sizes.general.lg
  },
  txt: {},
  inpt: {
    paddingHorizontal: sizes.maxi.md,
    paddingVertical: sizes.general.xs
  }
})

export default styles