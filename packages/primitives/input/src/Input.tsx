'use client'

// ============================================
// Imports
// ============================================
import { tv, type VariantProps } from "tailwind-variants"
import {
  composeRenderProps,
  Input as ReactAriaInput,
  type InputProps as ReactAriaInputProps,
} from 'react-aria-components';

// ============================================
// Types
// ============================================
interface InputProps extends Omit<ReactAriaInputProps, 'size'>, VariantProps<typeof input> { }

// ============================================
// Styles
// ============================================
const input = tv({
  base: 'input-base',
  variants: {
    variant: {
      outlined: 'input-outlined',
      filled: 'input-filled',
      transparent: 'input-transparent',
    },
    size: {
      sm: 'input-sm',
      md: 'input-md',
      lg: 'input-lg',
    },
    isHovered: {
      true: 'input-hovered'
    },
    isDisabled: {
      true: 'input-disabled'
    }
  },
  defaultVariants: {
    variant: 'filled',
    size: 'md'
  }
})

// ============================================
// Main Components
// ============================================
function Input({
  className,
  size = 'md',
  isDisabled,
  variant = 'filled',
  ...props
}: InputProps) {
  return (
    <ReactAriaInput
      {...props}
      className={composeRenderProps(className, (className, renderProps) => input({ ...renderProps, className, size, variant, isDisabled }))}
    />
  )
}

// ============================================
// Exports
// ============================================
export {
  Input,
  type InputProps
}