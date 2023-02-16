import React from 'react'
import { TextInput } from 'react-native-paper'
import colors from 'styles/colors'
import styles from './styles'

const Input = React.forwardRef((props, ref) => {
  const { mode = 'outlined', style } = props

  return (
    <TextInput
      {...props}
      ref={ref}
      mode={mode}
      outlineColor={colors.dark.border}
      activeOutlineColor={colors.dark.borderActive}
      textColor={colors.dark.text}
      placeholderTextColor={colors.dark.placeholder}
      theme={{
        colors: {
          onSurfaceVariant: colors.dark.placeholder
        }
      }}
      style={[style, styles.input]}
    />
  )
})

Input.displayName = 'Input'

export default Input
