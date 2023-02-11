import React from 'react'
import { TextInput } from 'react-native-paper'
import colors from 'styles/colors'
import styles from './styles'

const Input = React.forwardRef((props, ref) => {
  return (
    <TextInput
      {...props}
      ref={ref}
      mode="outlined"
      outlineColor={colors.dark.border}
      activeOutlineColor={colors.dark.borderActive}
      textColor={colors.dark.text}
      placeholderTextColor={colors.dark.placeholder}
      theme={{
        colors: {
          onSurfaceVariant: colors.dark.placeholder
        }
      }}
      style={[props.style, styles.input]}
    />
  )
})

Input.displayName = 'Input'

export default Input
