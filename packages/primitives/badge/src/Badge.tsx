'use client'

// ============================================
// Imports
// ============================================
import { tv, type VariantProps } from "tailwind-variants"

// ============================================
// Types
// ============================================
interface BadgeProps extends Omit<React.ComponentProps<'div'>, 'color'>, VariantProps<typeof badge> { }

// ============================================
// Styles
// ============================================
const badge = tv({
  base: 'badge-base',
  variants: {
    variant: {
      outlined: '',
      filled: '',
      subtle: '',
      transparent: '',
    },
    size: {
      sm: 'badge-sm',
      md: 'badge-md',
      lg: 'badge-lg',
    },
    color: {
      neutral: '',
      primary: '',
      secondary: '',
      info: '',
      success: '',
      warning: '',
      danger: '',
      magic: ''
    },
    isDisabled: {
      true: 'badge-disabled'
    }
  },
  compoundVariants: [
    // filled
    { variant: 'filled', color: 'neutral', class: 'badge-filled-neutral' },
    { variant: 'filled', color: 'primary', class: 'badge-filled-primary' },
    { variant: 'filled', color: 'secondary', class: 'badge-filled-secondary' },
    { variant: 'filled', color: 'info', class: 'badge-filled-info' },
    { variant: 'filled', color: 'success', class: 'badge-filled-success' },
    { variant: 'filled', color: 'warning', class: 'badge-filled-warning' },
    { variant: 'filled', color: 'danger', class: 'badge-filled-danger' },
    { variant: 'filled', color: 'magic', class: 'badge-filled-magic' },

    // subtle
    { variant: 'subtle', color: 'neutral', class: 'badge-subtle-neutral' },
    { variant: 'subtle', color: 'primary', class: 'badge-subtle-primary' },
    { variant: 'subtle', color: 'secondary', class: 'badge-subtle-secondary' },
    { variant: 'subtle', color: 'info', class: 'badge-subtle-info' },
    { variant: 'subtle', color: 'success', class: 'badge-subtle-success' },
    { variant: 'subtle', color: 'warning', class: 'badge-subtle-warning' },
    { variant: 'subtle', color: 'danger', class: 'badge-subtle-danger' },
    { variant: 'subtle', color: 'magic', class: 'badge-subtle-magic' },

    // outlined
    { variant: 'outlined', color: 'neutral', class: 'badge-outlined-neutral' },
    { variant: 'outlined', color: 'primary', class: 'badge-outlined-primary' },
    { variant: 'outlined', color: 'secondary', class: 'badge-outlined-secondary' },
    { variant: 'outlined', color: 'info', class: 'badge-outlined-info' },
    { variant: 'outlined', color: 'success', class: 'badge-outlined-success' },
    { variant: 'outlined', color: 'warning', class: 'badge-outlined-warning' },
    { variant: 'outlined', color: 'danger', class: 'badge-outlined-danger' },
    { variant: 'outlined', color: 'magic', class: 'badge-outlined-magic' },

    // transparent
    { variant: 'transparent', color: 'neutral', class: 'badge-transparent-neutral' },
    { variant: 'transparent', color: 'primary', class: 'badge-transparent-primary' },
    { variant: 'transparent', color: 'secondary', class: 'badge-transparent-secondary' },
    { variant: 'transparent', color: 'info', class: 'badge-transparent-info' },
    { variant: 'transparent', color: 'success', class: 'badge-transparent-success' },
    { variant: 'transparent', color: 'warning', class: 'badge-transparent-warning' },
    { variant: 'transparent', color: 'danger', class: 'badge-transparent-danger' },
    { variant: 'transparent', color: 'magic', class: 'badge-transparent-magic' },
  ],
  defaultVariants: {
    variant: 'filled',
    size: 'md',
    color: 'neutral',
  }
})

// ============================================
// Main Component
// ============================================
function Badge({
  className,
  children,
  variant = 'filled',
  isDisabled,
  size = 'md',
  color = 'neutral',
  ...props
}: BadgeProps) {
  return (
    <div
      {...props}
      className={badge({ className, variant, size, color, isDisabled })}
    >
      {children}
    </div>
  )
}

// ============================================
// Exports
// ============================================
export {
  Badge,
  type BadgeProps
}