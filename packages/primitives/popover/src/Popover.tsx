'use client'

import { useEffect } from 'react';
// ============================================
// Imports
// ============================================
import {
  Popover as ReactAriaPopoverContent,
  DialogTrigger as ReactAriaPopoverProvider,
  Pressable as ReactAriaPressable,
  OverlayArrow,
  composeRenderProps,
  type PopoverProps as ReactAriaPopoverContentProps,
  type DialogTriggerProps as ReactAriaPopoverProviderProps,
} from 'react-aria-components';
import { tv, type VariantProps } from 'tailwind-variants';

// ============================================
// Types
// ============================================
type PopoverComponent = React.FC<PopoverProps> & {
  Trigger: typeof PopoverTrigger;
  Content: typeof PopoverContent;
};

interface PopoverProps extends ReactAriaPopoverProviderProps { }

interface PopoverTriggerProps extends React.ComponentProps<'span'> { }

interface PopoverContentProps extends Omit<ReactAriaPopoverContentProps, 'children'> {
  children: React.ReactNode;
  showArrow?: boolean;
  arrowProps?: React.ComponentProps<'svg'>;
  customArrow?: React.ReactElement;
}

// ============================================
// Styles
// ============================================
const popoverTrigger = tv({
  base: 'popover-trigger-base'
})

const popoverContent = tv({
  base: 'popover-content-base',
  variants: {
    isEntering: {
      true: 'popover-content-entering'
    },
    isExiting: {
      true: 'popover-content-exiting'
    },
  },
})

const popoverArrow = tv({
  base: 'popover-arrow-base'
})

// ============================================
// Components
// ============================================
const Popover: PopoverComponent = ({
  children,
  ...props
}: PopoverProps) => {
  return (
    <ReactAriaPopoverProvider
      {...props}
    >
      {children}
    </ReactAriaPopoverProvider>
  )
}

function PopoverTrigger({
  children,
  className,
  ...props
}: PopoverTriggerProps) {
  return (
    <ReactAriaPressable>
      <span
        {...props}
        role="button"
        className={popoverTrigger({ className })}
      >
        {children}
      </span>
    </ReactAriaPressable >
  )
}

function PopoverContent({
  children,
  offset = 8,
  className,
  showArrow = true,
  arrowProps,
  customArrow,
  ...props
}: PopoverContentProps) {
  return (
    <ReactAriaPopoverContent
      offset={offset}
      {...props}
      className={composeRenderProps(className, (className, renderProps) => popoverContent({ ...renderProps, className }))}
    >
      {showArrow &&
        customArrow || (
          <OverlayArrow className={popoverArrow({ className: arrowProps?.className })}>
            <svg
              width={8}
              height={8}
              viewBox="0 0 8 8"
              {...arrowProps}
            >
              <path d="M0 0 L4 4 L8 0" />
            </svg>
          </OverlayArrow>
        )}
      {children}
    </ReactAriaPopoverContent>
  )
}

// ============================================
// Namespace Pattern
// ============================================
Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;

Popover.displayName = 'Popover';
PopoverTrigger.displayName = 'Popover.Trigger';
PopoverContent.displayName = 'Popover.Content';

// ============================================
// Exports
// ============================================
export {
  Popover,
  PopoverTrigger,
  PopoverContent,

  type PopoverProps,
  type PopoverTriggerProps,
  type PopoverContentProps,
}