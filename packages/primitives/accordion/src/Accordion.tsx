'use client'

// ============================================
// Imports
// ============================================
import { tv, type VariantProps } from "tailwind-variants"
import {
  DisclosureGroup as ReactAriaDisclosureGroup,
  Disclosure as ReactAriaDisclosure,
  DisclosurePanel as ReactAriaDisclosurePanel,
  composeRenderProps,
  Heading as ReactAriaHeading,
  DisclosureStateContext,
  Button as ReactAriaButton,

  type HeadingProps as ReactAriaHeadingProps,
  type DisclosureProps as ReactAriaDisclosureProps,
  type DisclosurePanelProps as ReactAriaDisclosurePanelProps,
  type DisclosureGroupProps as ReactAriaDisclosureGroupProps,
} from 'react-aria-components';
import { clsx } from 'clsx';
import { createContext, useContext } from "react";

// ============================================
// Types
// ============================================
type AccordionComponent = React.FC<AccordionProps> & {
  Item: typeof AccordionItem;
  Trigger: typeof AccordionTrigger;
  Content: typeof AccordionContent;
};

interface AccordionProps extends ReactAriaDisclosureGroupProps, VariantProps<typeof accordion> {
  indicatorProps?: AccordionIndicatorProps;
}

interface AccordionItemProps extends ReactAriaDisclosureProps { }

interface AccordionTriggerProps extends ReactAriaHeadingProps { }

interface AccordionIndicatorProps extends React.ComponentProps<'div'> {
  customIndicator?: (isExpanded: boolean) => React.ReactNode;
  expandedIndicator?: React.ReactNode;
  collapsedIndicator?: React.ReactNode;
}

interface AccordionContentProps extends ReactAriaDisclosurePanelProps { }

interface AccordionContext {
  indicatorProps?: AccordionIndicatorProps;
  variant?: VariantProps<typeof accordion>['variant'];
}

// ============================================
// Styles
// ============================================
const accordion = tv({
  base: 'accordion-base',
  variants: {
    variant: {
      transparent: 'accordion-transparent',
      divided: 'accordion-divided',
      filled: 'accordion-filled',
      outlined: 'accordion-outlined',
      contained: 'accordion-contained',
    },
    isDisabled: {
      true: 'accordion-disabled'
    },
  },
  defaultVariants: {
    variant: 'transparent'
  }
})

const accordionItem = tv({
  base: 'accordion-item-base',
  variants: {
    variant: {
      transparent: 'accordion-item-transparent',
      divided: 'accordion-item-divided',
      filled: 'accordion-item-filled',
      outlined: 'accordion-item-outlined',
      contained: 'accordion-item-contained'
    },
    isDisabled: {
      true: 'accordion-item-disabled'
    }
  },
  defaultVariants: {
    variant: 'transparent'
  }
})

const accordionTrigger = tv({
  base: 'accordion-trigger-base',
  variants: {
    variant: {
      transparent: 'accordion-trigger-transparent',
      filled: 'accordion-trigger-filled',
      divided: 'accordion-trigger-divided',
      contained: 'accordion-trigger-contained',
      outlined: 'accordion-trigger-outlined'
    },
  },
  defaultVariants: {
    variant: 'transparent'
  }
})

const accordionIndicator = tv({
  base: 'accordion-indicator-base',
  variants: {
    isExpanded: {
      true: 'accordion-indicator-expanded',
      false: 'accordion-indicator-collapsed'
    }
  }
})

const accordionPanel = tv({
  base: 'accordion-panel-base',
})

const accordionContent = tv({
  base: 'accordion-content-base',
  variants: {
    isExpanded: {
      true: 'accordion-content-expanded',
      false: 'accordion-content-collapsed'
    }
  }
})

// ============================================
// Context
// ============================================
const AccordionContext = createContext<AccordionContext>({})

// ============================================
// Sub-Components
// ============================================
function AccordionIndicator({
  className,
  children,
  customIndicator,
  expandedIndicator,
  collapsedIndicator,
  ...props
}: AccordionIndicatorProps) {
  let { isExpanded } = useContext(DisclosureStateContext)!;

  if (customIndicator) return (
    <div>
      {customIndicator(isExpanded)}
    </div>
  )

  return (
    <div
      {...props}
      className={accordionIndicator({ className, isExpanded })}
    >
      {isExpanded && (expandedIndicator ? expandedIndicator : (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
      ))}

      {!isExpanded && (collapsedIndicator ? collapsedIndicator : (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
      ))}
    </div >
  )
}

// ============================================
// Main Components
// ============================================
const Accordion: AccordionComponent = ({
  children,
  className,
  indicatorProps,
  variant,
  ...props
}: AccordionProps) => {
  return (
    <AccordionContext.Provider value={{ indicatorProps, variant }}>
      <ReactAriaDisclosureGroup
        {...props}
        className={accordion({ className: clsx(className), variant })}
      >
        {children}
      </ReactAriaDisclosureGroup>
    </AccordionContext.Provider>
  )
}

function AccordionItem({
  children,
  className,
  ...props
}: AccordionItemProps) {
  const { variant } = useContext(AccordionContext)!

  return (
    <ReactAriaDisclosure
      {...props}
      className={composeRenderProps(className, (className, renderProps) => accordionItem({ ...renderProps, className, variant }))}
    >
      {children}
    </ReactAriaDisclosure>
  )
}

function AccordionTrigger({
  children,
  className,
  ...props
}: AccordionTriggerProps) {
  const { indicatorProps, variant } = useContext(AccordionContext)!;

  return (
    <ReactAriaHeading {...props}>
      <ReactAriaButton
        className={accordionTrigger({ className, variant })}
        slot="trigger"
      >
        {children}
        <AccordionIndicator {...indicatorProps} />
      </ReactAriaButton>
    </ReactAriaHeading >
  )
}

function AccordionContent({
  children,
  className,
  ...props
}: AccordionContentProps) {
  let { isExpanded } = useContext(DisclosureStateContext)!;

  return (
    <ReactAriaDisclosurePanel
      {...props}
      className={composeRenderProps(className, (_, renderProps) => accordionPanel({ ...renderProps }))}
    >
      <div className={accordionContent({ className: clsx(className), isExpanded })}>
        {children}
      </div>
    </ReactAriaDisclosurePanel>
  )
}

// ============================================
// Namespace Pattern
// ============================================
Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

Accordion.displayName = 'Accordion';
AccordionItem.displayName = 'Accordion.Item';
AccordionTrigger.displayName = 'Accordion.Trigger';
AccordionContent.displayName = 'Accordion.Content';

// ============================================
// Exports
// ============================================
export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,

  type AccordionProps,
  type AccordionItemProps,
  type AccordionTriggerProps,
  type AccordionContentProps,
}