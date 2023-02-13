import { StyleSheet } from 'react-native'
import colors from 'styles/colors'
import commonStyles, { sizes } from 'styles/commonStyles'

const styles = StyleSheet.create({
  container: {
    ...commonStyles.container
  },
  header: {
    color: colors.dark.text,
    marginVertical: sizes.general.md,
    marginHorizontal: sizes.general.lg,
    fontSize: sizes.general.ml
  },
  loadList: {
    flex: 1,
    backgroundColor: colors.dark.secondary
  },
  bottom: {
    marginHorizontal: sizes.general.md
  },
  btns: {
    flexDirection: 'row',
    zIndex: 0,
    ...commonStyles.center,
    ...commonStyles.rowCenter
  },
  btn: {
    flex: 1
  },
  iptal: {
    backgroundColor: 'red'
  },
  hazir: {
    backgroundColor: 'green'
  },
  ekleBox: {
    marginLeft: 'auto',
    marginRight: 'auto',
    top: sizes.general.ml,
    position: 'relative',
    zIndex: 10
  },
  ekle: {
    width: sizes.maxi.md,
    height: sizes.maxi.md
  }
})

export default styles
