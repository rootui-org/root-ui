'use client'

// ============================================
// Imports
// ============================================
import { tv, type VariantProps } from 'tailwind-variants';
import {
  Switch as ReactAriaSwitch,
  type SwitchProps as ReactAriaSwitchProps,
} from 'react-aria-components';
import clsx from 'clsx';

// ============================================
// Types
// ============================================
interface SwitchProps extends VariantProps<typeof switchTrack>, ReactAriaSwitchProps {
  thumbContent?: React.ReactNode;
  trackContent?: React.ReactNode;
}

// ============================================
// Styles
// ============================================
const switchTrack = tv({
  base: 'switch-track-base',
  variants: {
    isSelected: {
      false: 'switch-track-not-selected',
      true: 'switch-track-selected',
    },
    isHovered: {
      true: 'switch-track-hovered'
    },
    isPressed: {
      true: 'switch-track-pressed'
    },
    isDisabled: {
      true: 'switch-track-disabled',
    },
    size: {
      sm: 'switch-track-sm',
      md: 'switch-track-md',
      lg: 'switch-track-lg',
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
    }
  },
  compoundVariants: [
    { isSelected: true, color: 'neutral', class: 'switch-track-selected-neutral' },
    { isSelected: true, color: 'primary', class: 'switch-track-selected-primary' },
    { isSelected: true, color: 'secondary', class: 'switch-track-selected-secondary' },
    { isSelected: true, color: 'info', class: 'switch-track-selected-info' },
    { isSelected: true, color: 'success', class: 'switch-track-selected-success' },
    { isSelected: true, color: 'warning', class: 'switch-track-selected-warning' },
    { isSelected: true, color: 'danger', class: 'switch-track-selected-danger' },
    { isSelected: true, color: 'magic', class: 'switch-track-selected-magic' },
  ],
  defaultVariants: {
    isSelected: false,
    isDisabled: false,
    size: 'md',
    color: 'primary'
  }
})

const switchThumb = tv({
  base: 'switch-thumb-base',
  variants: {
    isSelected: {
      true: 'switch-thumb-selected',
      false: 'switch-thumb-not-selected',
    },
    isDisabled: {
      true: 'switch-thumb-disabled',
    },
    isHovered: {
      true: 'switch-thumb-hovered'
    },
    isPressed: {
      true: 'switch-thumb-pressed'
    },
    size: {
      sm: 'switch-thumb-sm',
      md: 'switch-thumb-md',
      lg: 'switch-thumb-lg',
    },
  },
  compoundVariants: [
    { isSelected: true, size: 'sm', class: 'switch-thumb-selected-sm' },
    { isSelected: true, size: 'md', class: 'switch-thumb-selected-md' },
    { isSelected: true, size: 'lg', class: 'switch-thumb-selected-lg' },
  ],
  defaultVariants: {
    isSelected: false,
    isDisabled: false,
    size: 'md'
  }
})

// ============================================
// Main Component
// ============================================
function Switch({
  size = 'md',
  color = 'primary',
  className,
  thumbContent,
  trackContent,
  ...props
}: SwitchProps) {
  return (
    <ReactAriaSwitch
      {...props}
    >
      {(renderProps) => (
        <div className={switchTrack({ ...renderProps, size, color, className: clsx(className) })}>
          <div className='absolute z-0 left-0 top-2/4 -translate-y-2/4 w-full h-full'>
            {trackContent}
          </div>
          <span className={switchThumb({ ...renderProps, size })}>
            {thumbContent}
          </span>
        </div>
      )}
    </ReactAriaSwitch>
  )
}

// ============================================
// Exports
// ============================================
export {
  Switch,
  type SwitchProps
}