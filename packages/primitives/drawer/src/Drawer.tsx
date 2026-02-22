'use client'

// ============================================
// Imports
// ============================================
import { tv, type VariantProps } from "tailwind-variants"
import {
  Modal as ReactAriaModalContent,
  ModalOverlay as ReactAriaModalOverlay,
  DialogTrigger as ReactAriaDialogTrigger,
  type DialogTriggerProps as ReactAriaDialogTriggerProps,
  type ModalOverlayProps as ReactAriaModalOverlayProps,
  Pressable as ReactAriaPressable,
  Dialog as ReactAriaDialog,
  type DialogProps as ReactAriaDialogProps,
} from 'react-aria-components';
import { clsx } from 'clsx';

// ============================================
// Types
// ============================================
type DrawerComponent = React.FC<DrawerProps> & {
  Trigger: typeof DrawerTrigger;
  Content: typeof DrawerContent;
};

interface DrawerProps extends ReactAriaDialogTriggerProps { }

interface DrawerTriggerProps extends Omit<React.ComponentProps<typeof ReactAriaPressable>, 'children'> {
  children: React.ReactNode;
}

interface DrawerContentProps extends
  Omit<ReactAriaModalOverlayProps, 'children'>,
  VariantProps<typeof drawerContent>,
  VariantProps<typeof drawerOverlay> {
  dialogProps?: ReactAriaDialogProps;
  children: React.ReactNode;
}

// ============================================
// Styles
// ============================================
const drawerOverlay = tv({
  base: 'drawer-overlay-base',
  variants: {
    isEntering: {
      true: 'drawer-overlay-entering'
    },
    isExiting: {
      true: 'drawer-overlay-exiting'
    }
  }
})

const drawerTrigger = tv({
  base: 'drawer-trigger-base',
})

const drawerContent = tv({
  base: 'drawer-content-base',
  variants: {
    side: {
      left: 'drawer-content-left',
      right: 'drawer-content-right',
      top: 'drawer-content-top',
      bottom: 'drawer-content-bottom',
    },
    isEntering: {
      true: 'drawer-content-entering'
    },
    isExiting: {
      true: 'drawer-content-exiting'
    },
  },
  defaultVariants: {
    side: 'right'
  }
})

// ============================================
// Components
// ============================================
const Drawer: DrawerComponent = ({
  children,
  ...props
}: DrawerProps) => {
  return (
    <ReactAriaDialogTrigger
      {...props}
    >
      {children}
    </ReactAriaDialogTrigger>
  )
}

function DrawerTrigger({
  children,
  ...props
}: DrawerTriggerProps) {
  return (
    <ReactAriaPressable {...props}>
      <span className={drawerTrigger()}>{children}</span>
    </ReactAriaPressable>
  )
}

function DrawerContent({
  className,
  children,
  side,
  isDismissable = true,
  dialogProps,
  ...props
}: DrawerContentProps) {
  return (
    <ReactAriaModalOverlay
      {...props}
      isDismissable={isDismissable}
      className={(renderProps) => drawerOverlay({
        isEntering: renderProps.isEntering,
        isExiting: renderProps.isExiting
      })}
    >
      {(renderProps) => (
        <ReactAriaModalContent
          className={drawerContent({
            isEntering: renderProps.isEntering,
            isExiting: renderProps.isExiting,
            side,
            className: clsx(className)
          })}
        >
          <ReactAriaDialog {...dialogProps}>
            {children}
          </ReactAriaDialog>
        </ReactAriaModalContent>
      )}
    </ReactAriaModalOverlay>
  )
}

// ============================================
// Namespace Pattern
// ============================================
Drawer.Trigger = DrawerTrigger;
Drawer.Content = DrawerContent;

Drawer.displayName = 'Drawer';
DrawerTrigger.displayName = 'Drawer.Trigger';
DrawerContent.displayName = 'Drawer.Content';

// ============================================
// Exports
// ============================================
export {
  Drawer,
  DrawerTrigger,
  DrawerContent,

  type DrawerProps,
  type DrawerTriggerProps,
  type DrawerContentProps,
}