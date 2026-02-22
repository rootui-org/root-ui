'use client'

// ============================================
// Imports
// ============================================
import { tv, type VariantProps } from 'tailwind-variants'
import {
  composeRenderProps,
  Button as ReactAriaButton,
  type ButtonProps as ReactAriaButtonProps
} from 'react-aria-components';

// ============================================
// Types
// ============================================
interface ButtonProps extends VariantProps<typeof button>, ReactAriaButtonProps {
  customLoadingIcon?: React.ReactElement;
  loadingIconProps?: LoadingIconProps;
}

interface LoadingIconProps extends React.ComponentProps<'svg'>, VariantProps<typeof buttonLoadingIcon> { }

// ============================================
// Styles
// ============================================
const button = tv({
  base: 'button-base',
  variants: {
    isLoading: {
      true: 'button-loading'
    },
    isDisabled: {
      true: 'button-disabled',
      false: 'button-not-disabled'
    },
    size: {
      sm: 'button-sm',
      md: 'button-md',
      lg: 'button-lg',
    },
    isIconOnly: {
      true: 'button-icon-only',
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
    variant: {
      filled: 'button-filled',
      outlined: 'button-outlined',
      subtle: 'button-subtle',
      transparent: 'button-transparent'
    },
    isHovered: {
      true: 'button-hovered'
    },
    isPressed: {
      true: 'button-pressed'
    }
  },
  compoundVariants: [
    // Filled variants
    { variant: 'filled', color: 'neutral', className: 'button-filled-neutral' },
    { variant: 'filled', color: 'primary', className: 'button-filled-primary' },
    { variant: 'filled', color: 'secondary', className: 'button-filled-secondary' },
    { variant: 'filled', color: 'info', className: 'button-filled-info' },
    { variant: 'filled', color: 'success', className: 'button-filled-success' },
    { variant: 'filled', color: 'warning', className: 'button-filled-warning' },
    { variant: 'filled', color: 'danger', className: 'button-filled-danger' },
    { variant: 'filled', color: 'magic', className: 'button-filled-magic' },

    // Outlined variants
    { variant: 'outlined', color: 'neutral', className: 'button-outlined-neutral' },
    { variant: 'outlined', color: 'primary', className: 'button-outlined-primary' },
    { variant: 'outlined', color: 'secondary', className: 'button-outlined-secondary' },
    { variant: 'outlined', color: 'info', className: 'button-outlined-info' },
    { variant: 'outlined', color: 'success', className: 'button-outlined-success' },
    { variant: 'outlined', color: 'warning', className: 'button-outlined-warning' },
    { variant: 'outlined', color: 'danger', className: 'button-outlined-danger' },
    { variant: 'outlined', color: 'magic', className: 'button-outlined-magic' },

    // Subtle variants
    { variant: 'subtle', color: 'neutral', className: 'button-subtle-neutral' },
    { variant: 'subtle', color: 'primary', className: 'button-subtle-primary' },
    { variant: 'subtle', color: 'secondary', className: 'button-subtle-secondary' },
    { variant: 'subtle', color: 'info', className: 'button-subtle-info' },
    { variant: 'subtle', color: 'success', className: 'button-subtle-success' },
    { variant: 'subtle', color: 'warning', className: 'button-subtle-warning' },
    { variant: 'subtle', color: 'danger', className: 'button-subtle-danger' },
    { variant: 'subtle', color: 'magic', className: 'button-subtle-magic' },

    // Transparent variants
    { variant: 'transparent', color: 'neutral', className: 'button-transparent-neutral' },
    { variant: 'transparent', color: 'primary', className: 'button-transparent-primary' },
    { variant: 'transparent', color: 'secondary', className: 'button-transparent-secondary' },
    { variant: 'transparent', color: 'info', className: 'button-transparent-info' },
    { variant: 'transparent', color: 'success', className: 'button-transparent-success' },
    { variant: 'transparent', color: 'warning', className: 'button-transparent-warning' },
    { variant: 'transparent', color: 'danger', className: 'button-transparent-danger' },
    { variant: 'transparent', color: 'magic', className: 'button-transparent-magic' },
  ],
  defaultVariants: {
    size: 'md',
    variant: 'filled',
    color: 'neutral',
    isDisabled: false,
    isLoading: false
  }
})

const buttonLoadingIcon = tv({
  base: 'button-loading-icon-base'
})

// ============================================
// Sub-components
// ============================================
function LoadingIcon({
  children,
  className,
  ...props
}: LoadingIconProps) {
  return (
    <span className={buttonLoadingIcon({ className })}>
      {children || (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
      )}
    </span>
  )
}

// ============================================
// Main Component
// ============================================
function Button({
  isIconOnly,
  color,
  variant,
  isLoading,
  size,
  isPending,
  loadingIconProps,
  customLoadingIcon,
  ...props
}: ButtonProps) {
  return (
    <ReactAriaButton
      {...props}
      isPending={isLoading || isPending}
      className={composeRenderProps(
        props.className,
        (className, renderProps) => button({
          ...renderProps,
          color,
          variant,
          isHovered: renderProps.isHovered,
          isPressed: renderProps.isPressed,
          size,
          isLoading: isLoading || isPending,
          isIconOnly,
          className
        })
      )}
    >
      {composeRenderProps(props.children, (children, { isPending }) => (
        <>
          <span className={(isLoading || isPending) ? 'text-transparent select-none' : ''}>{children}</span>
          {(isLoading || isPending) && <LoadingIcon {...loadingIconProps}>{customLoadingIcon}</LoadingIcon>}
        </>
      ))}
    </ReactAriaButton>
  )
}

// ============================================
// Exports
// ============================================
export {
  Button,
  type ButtonProps
}