'use client'

// ============================================
// Imports
// ============================================
import {
  Tooltip as ReactAriaTooltipContent,
  TooltipTrigger as ReactAriaTooltipProvider,
  Focusable,
  Button,
  OverlayArrow,
  composeRenderProps,
  type TooltipProps as ReactAriaTooltipContentProps,
  type TooltipTriggerComponentProps as ReactAriaTooltipProviderProps,
} from 'react-aria-components';
import { tv, type VariantProps } from 'tailwind-variants';

// ============================================
// Types
// ============================================
type TooltipComponent = React.FC<TooltipProps> & {
  Trigger: typeof TooltipTrigger;
  Content: typeof TooltipContent;
};

interface TooltipProps extends ReactAriaTooltipProviderProps {
  className?: string;
}

interface TooltipTriggerProps extends React.ComponentProps<'span'> { }

interface TooltipContentProps extends VariantProps<typeof tooltipContent>, Omit<ReactAriaTooltipContentProps, 'children'> {
  children: React.ReactNode;
  showArrow?: boolean;
  arrowProps?: React.ComponentProps<'svg'>;
  customArrow?: React.ReactNode;
}

// ============================================
// Styles
// ============================================
const tooltipTrigger = tv({
  base: 'tooltip-trigger-base'
})

const tooltipContent = tv({
  base: 'tooltip-content-base',
  variants: {
    isEntering: {
      true: 'tooltip-content-entering'
    },
    isExiting: {
      true: 'tooltip-content-exiting'
    },
  },
})

const tooltipArrow = tv({
  base: 'tooltip-arrow-base',
})

// ============================================
// Components
// ============================================
const Tooltip: TooltipComponent = ({
  children,
  delay = 300,
  closeDelay = 500,
  ...props
}: TooltipProps) => {
  return (
    <ReactAriaTooltipProvider
      delay={delay}
      closeDelay={closeDelay}
      {...props}
    >
      {children}
    </ReactAriaTooltipProvider>
  )
}

function TooltipTrigger({
  children,
  className,
  ...props
}: TooltipTriggerProps) {
  return (
    <Focusable>
      <span
        {...props}
        role="button"
        className={tooltipTrigger({ className })}
      >
        {children}
      </span>
    </Focusable>
  )
}

function TooltipContent({
  children,
  offset = 8,
  className,
  showArrow = true,
  arrowProps,
  customArrow,
  ...props
}: TooltipContentProps) {
  return (
    <ReactAriaTooltipContent
      offset={offset}
      {...props}
      className={composeRenderProps(className, (className, renderProps) => tooltipContent({ ...renderProps, className }))}
    >
      {showArrow &&
        customArrow || (
          <OverlayArrow className='group'>
            <svg
              width={8}
              height={8}
              viewBox="0 0 8 8"
              {...arrowProps}
              className={tooltipArrow({ className: arrowProps?.className })}
            >
              <path d="M0 0 L4 4 L8 0" />
            </svg>
          </OverlayArrow>
        )}
      {children}
    </ReactAriaTooltipContent>
  )
}

// ============================================
// Namespace Pattern
// ============================================
Tooltip.Trigger = TooltipTrigger;
Tooltip.Content = TooltipContent;

Tooltip.displayName = 'Tooltip';
TooltipTrigger.displayName = 'Tooltip.Trigger';
TooltipContent.displayName = 'Tooltip.Content';

// ============================================
// Exports
// ============================================
export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,

  type TooltipProps,
  type TooltipTriggerProps,
  type TooltipContentProps,

}