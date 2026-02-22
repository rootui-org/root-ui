'use client'

// ============================================
// Imports
// ============================================
import { tv, type VariantProps } from "tailwind-variants";

// ============================================
// Types
// ============================================
interface TypographyProps extends Omit<React.ComponentProps<'p'>, 'color'>, VariantProps<typeof typography> { }

// ============================================
// Styles
// ============================================
const typography = tv({
  base: 'typography-base',
  variants: {
    variant: {
      h1: 'typography-h1',
      h2: 'typography-h2',
      h3: 'typography-h3',
      h4: 'typography-h4',
      h5: 'typography-h5',
      h6: 'typography-h6',
      body: 'typography-body',
      'body-sm': 'typography-body-sm',
      caption: 'typography-caption'
    },
    color: {
      default: 'text-default',
      subtle: 'text-subtle',
      disabled: 'text-disabled',
      inverse: 'text-inverse',
      primary: 'text-primary',
      secondary: 'text-secondary',
      info: 'text-info',
      success: 'text-success',
      warning: 'text-warning',
      danger: 'text-danger',
      magic: 'text-magic'
    },
    weight: {
      100: 'font-thin',
      200: 'font-extralight',
      300: 'font-light',
      400: 'font-normal',
      500: 'font-medium',
      600: 'font-semibold',
      700: 'font-bold',
      800: 'font-extrabold',
      900: 'font-black'
    }
  },
  defaultVariants: {
    variant: 'body',
  },
})

// ============================================
// Main Component
// ============================================
function Typography({
  variant = 'body',
  color,
  className,
  weight,
  children,
  ...props
}: TypographyProps) {
  const styles = typography({ variant, color, className, weight });

  if (variant === 'h1') return <h1 {...props} className={styles}>{children}</h1>
  if (variant === 'h2') return <h2 {...props} className={styles}>{children}</h2>
  if (variant === 'h3') return <h3 {...props} className={styles}>{children}</h3>
  if (variant === 'h4') return <h4 {...props} className={styles}>{children}</h4>
  if (variant === 'h5') return <h5 {...props} className={styles}>{children}</h5>
  if (variant === 'h6') return <h6 {...props} className={styles}>{children}</h6>

  return <p {...props} className={styles}>{children}</p>
}

// ============================================
// Exports
// ============================================
export {
  Typography,
  type TypographyProps
}