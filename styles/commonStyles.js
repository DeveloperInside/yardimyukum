import { StyleSheet } from 'react-native'
import colors from './colors'

export const sizes = {
  general: {
    xs: 2,
    sm: 4,
    ms: 6,
    md: 8,
    ml: 12,
    lg: 16,
    xl: 20,
    hg: 24
  },
  maxi: {
    xs: 26,
    sm: 32,
    ms: 36,
    md: 48,
    ml: 54,
    lg: 64,
    xl: 72,
    hg: 96
  }
}

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark.primary
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  marginCommon: {
    margin: sizes.general.ml
  },
  paddingButton: {
    paddingVertical: sizes.general.ml,
    paddingHorizontal: sizes.general.hg
  },
  radius: {
    borderRadius: sizes.general.ms
  },
  border: {
    borderWidth: 1,
    borderColor: colors.dark.border,
    borderRadius: sizes.general.ms
  }
})

export default commonStyles
