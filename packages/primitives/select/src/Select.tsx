'use client'

// ============================================
// Imports
// ============================================
import { tv, type VariantProps } from "tailwind-variants"
import {
  Select as ReactAriaSelect,
  ListBoxItem as ReactAriaListBoxItem,
  Button as ReactAriaButton,
  Popover as ReactAriaPopover,
  ListBox as ReactAriaListBox,
  SelectValue as ReactAriaSelectValue,
  composeRenderProps,

  type ListBoxItemProps as ReactAriaListBoxItemProps,
  type SelectProps as ReactAriaSelectProps,
} from 'react-aria-components';
import clsx from "clsx";
import { createContext, useContext } from 'react'

// ============================================
// Types
// ============================================
type SelectComponent = React.FC<SelectProps> & {
  Item: typeof SelectItem;
};

interface SelectProps extends ReactAriaSelectProps, VariantProps<typeof selectTrigger> {
  triggerIndicatorProps?: SelectTriggerIndicator;
  customTriggerIndicator?: React.ReactNode;
  customTriggerIsOpenedIndicator?: React.ReactNode;
  customTriggerIsClosedIndicator?: React.ReactNode;
  customItemIsSelectedIndicator?: React.ReactNode;
  itemIndicatorProps?: SelectItemIndicator;
  itemProps?: SelectItemProps;
}

interface SelectItemProps extends ReactAriaListBoxItemProps {
  indicatorProps?: SelectItemIndicator;
  customItemIsSelectedIndicator?: React.ReactNode;
}

interface SelectTriggerIndicator extends React.ComponentProps<'svg'>, VariantProps<typeof selectTriggerIndicator> {
  customTriggerIndicator?: React.ReactNode;
  customTriggerIsOpenedIndicator?: React.ReactNode;
  customTriggerIsClosedIndicator?: React.ReactNode;
  isOpen?: boolean;
}

interface SelectItemIndicator extends React.ComponentProps<'svg'>, VariantProps<typeof selectTriggerIndicator> {
  customItemIsSelectedIndicator?: React.ReactNode;
}

interface SelectContext {
  customItemIsSelectedIndicator?: React.ReactNode;
  itemIndicatorProps?: SelectItemIndicator;
  size?: 'sm' | 'md' | 'lg';
}

// ============================================
// Styles
// ============================================
const selectTrigger = tv({
  base: 'select-trigger-base',
  variants: {
    variant: {
      outlined: 'select-trigger-outlined',
      filled: 'select-trigger-filled',
      transparent: 'select-trigger-transparent',
    },
    size: {
      sm: 'select-trigger-sm',
      md: 'select-trigger-md',
      lg: 'select-trigger-lg',
    },
    isHovered: {
      true: 'select-trigger-hovered'
    },
    isDisabled: {
      true: 'select-trigger-disabled'
    }
  },
  defaultVariants: {
    variant: 'filled',
    size: 'md'
  }
})

const selectTriggerValue = tv({
  base: 'select-trigger-value-base'
})

const selectPopover = tv({
  base: 'select-popover-base',
  variants: {
    isEntering: {
      true: 'select-popover-entering',
    },
    isExiting: {
      true: 'select-popover-exiting',
    },
  }
})

const selectItems = tv({
  base: 'select-items-base'
})

const selectItem = tv({
  base: 'select-item-base',
  variants: {
    size: {
      sm: 'select-item-sm',
      md: 'select-item-md',
      lg: 'select-item-lg',
    },
    isSelected: {
      true: 'select-item-selected',
      false: 'select-item-not-selected',
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

const selectTriggerIndicator = tv({
  base: 'select-trigger-indicator-base'
})

const selectItemIndicator = tv({
  base: 'select-item-indicator-base'
})

// ============================================
// Context
// ============================================
const SelectContext = createContext<SelectContext>({});

// ============================================
// Sub-components
// ============================================
function SelectTriggerIndicator({
  className,
  customTriggerIsOpenedIndicator,
  customTriggerIsClosedIndicator,
  customTriggerIndicator,
  isOpen,
  ...props
}:
  SelectTriggerIndicator
) {
  const renderIndicator = () => {
    if (isOpen && customTriggerIsOpenedIndicator) return customTriggerIsOpenedIndicator;
    if (!isOpen && customTriggerIsClosedIndicator) return customTriggerIsClosedIndicator;
    if (customTriggerIndicator) return customTriggerIndicator;
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" /></svg>
  }

  return (
    <span className={selectTriggerIndicator({ className })}>
      {renderIndicator()}
    </span>
  )
}

function SelectItemIndicator({
  className,
  customItemIsSelectedIndicator,
  ...props
}:
  SelectItemIndicator
) {
  const renderIndicator = () => {
    if (customItemIsSelectedIndicator) return customItemIsSelectedIndicator;
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 6 9 17l-5-5" /></svg>
  }

  return (
    <span className={selectItemIndicator({ className })}>
      {renderIndicator()}
    </span>
  )
}

// ============================================
// Main Components
// ============================================
const Select: SelectComponent = ({
  children,
  className,
  variant,
  triggerIndicatorProps,
  customTriggerIndicator,
  customTriggerIsClosedIndicator,
  customTriggerIsOpenedIndicator,
  customItemIsSelectedIndicator,
  itemIndicatorProps,
  size,
  ...props
}: SelectProps) => {
  return (
    <ReactAriaSelect
      className='group'
      {...props}
    >
      {({ isOpen }) => (
        <SelectContext.Provider value={{ customItemIsSelectedIndicator, itemIndicatorProps, size }}>
          <ReactAriaButton
            className={(renderProps) => selectTrigger({ ...renderProps, variant, size, className: clsx(className) })}
          >
            <ReactAriaSelectValue className={selectTriggerValue()}>
              {({ selectedText, defaultChildren }) => selectedText || defaultChildren}
            </ReactAriaSelectValue>

            <SelectTriggerIndicator
              {...triggerIndicatorProps}
              isOpen={isOpen}
              customTriggerIsOpenedIndicator={customTriggerIsOpenedIndicator}
              customTriggerIsClosedIndicator={customTriggerIsClosedIndicator}
              customTriggerIndicator={customTriggerIndicator}
            />
          </ReactAriaButton>

          <ReactAriaPopover className={(renderProps) => selectPopover({
            isEntering: renderProps.isEntering,
            isExiting: renderProps.isExiting,
          })}>
            <ReactAriaListBox className={selectItems()}>
              {children}
            </ReactAriaListBox>
          </ReactAriaPopover>
        </SelectContext.Provider>
      )}
    </ReactAriaSelect>
  )
}

function SelectItem({
  indicatorProps,
  className,
  ...props
}: SelectItemProps) {
  const { customItemIsSelectedIndicator, itemIndicatorProps } = useContext(SelectContext);
  let textValue = props.textValue || (typeof props.children === 'string' ? props.children : undefined);
  const { size } = useContext(SelectContext);

  return (
    <ReactAriaListBoxItem
      {...props}
      textValue={textValue}
      className={(renderProps => selectItem({ ...renderProps, size, className: clsx(className) }))}
    >
      {composeRenderProps(props.children, (children, { isSelected }) => <>
        <span className="flex items-center flex-1 gap-2 font-normal truncate group-selected:font-semibold">
          {children}
        </span>
        {isSelected && (
          <SelectItemIndicator
            {...itemIndicatorProps}
            {...indicatorProps}
            customItemIsSelectedIndicator={customItemIsSelectedIndicator || props.customItemIsSelectedIndicator}
          />
        )}
      </>)}
    </ReactAriaListBoxItem>
  )
}
// ============================================
// Namespace Pattern
// ============================================
Select.Item = SelectItem;

Select.displayName = 'Select';
SelectItem.displayName = 'Select.Item';

// ============================================
// Exports
// ============================================
export {
  Select,
  SelectItem,
  type SelectProps,
  type SelectItemProps,
}