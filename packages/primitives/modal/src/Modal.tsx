'use client'

// ============================================
// Imports
// ============================================
import { tv, type VariantProps } from "tailwind-variants";
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
type ModalComponent = React.FC<ModalProps> & {
  Trigger: typeof ModalTrigger;
  Content: typeof ModalContent;
};

interface ModalProps extends ReactAriaDialogTriggerProps { }

interface ModalTriggerProps extends Omit<React.ComponentProps<typeof ReactAriaPressable>, 'children'> {
  children: React.ReactNode;
}

interface ModalContentProps extends
  Omit<ReactAriaModalOverlayProps, 'children'>,
  VariantProps<typeof modalContent>,
  VariantProps<typeof modalOverlay> {
  dialogProps?: ReactAriaDialogProps;
  children: React.ReactNode;
}

// ============================================
// Styles
// ============================================
const modalOverlay = tv({
  base: 'modal-overlay-base',
  variants: {
    isEntering: {
      true: 'modal-overlay-entering'
    },
    isExiting: {
      true: 'modal-overlay-exiting'
    }
  }
})

const modalTrigger = tv({
  base: 'modal-trigger-base',
})

const modalContent = tv({
  base: 'modal-content-base',
  variants: {
    isEntering: {
      true: 'modal-content-entering'
    },
    isExiting: {
      true: 'modal-content-exiting'
    },
  },
})

// ============================================
// Components
// ============================================
const Modal: ModalComponent = ({
  children,
  ...props
}: ModalProps) => {
  return (
    <ReactAriaDialogTrigger {...props}>
      {children}
    </ReactAriaDialogTrigger>
  )
}

function ModalTrigger({
  children,
  ...props
}: ModalTriggerProps) {
  return (
    <ReactAriaPressable {...props}>
      <span className={modalTrigger()}>{children}</span>
    </ReactAriaPressable>
  )
}

function ModalContent({
  className,
  children,
  isDismissable = true,
  dialogProps,
  ...props
}: ModalContentProps) {
  return (
    <ReactAriaModalOverlay
      {...props}
      isDismissable={isDismissable}
      className={(renderProps) => modalOverlay({
        isEntering: renderProps.isEntering,
        isExiting: renderProps.isExiting
      })}
    >
      {(renderProps) => (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center">
          <ReactAriaModalContent
            className={modalContent({
              isEntering: renderProps.isEntering,
              isExiting: renderProps.isExiting,
              className: clsx(className)
            })}
          >
            <ReactAriaDialog {...dialogProps}>
              {children}
            </ReactAriaDialog>
          </ReactAriaModalContent>
        </div>
      )}
    </ReactAriaModalOverlay>
  )
}

// ============================================
// Namespace Pattern
// ============================================
Modal.Trigger = ModalTrigger;
Modal.Content = ModalContent;

Modal.displayName = 'Modal';
ModalTrigger.displayName = 'Modal.Trigger';
ModalContent.displayName = 'Modal.Content';

// ============================================
// Exports
// ============================================
export {
  Modal,
  ModalTrigger,
  ModalContent,

  type ModalProps,
  type ModalTriggerProps,
  type ModalContentProps,
}