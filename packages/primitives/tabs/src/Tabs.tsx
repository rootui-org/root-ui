'use client'

// ============================================
// Imports
// ============================================
import { tv, type VariantProps } from "tailwind-variants"
import {
  Tab as RACTab,
  TabList as RACTabList,
  TabPanels as RACTabPanels,
  TabPanel as RACTabPanel,
  Tabs as RACTabs,
  SelectionIndicator as RACSelectionIndicator,
  type TabListProps as RACTabListProps,
  type TabPanelProps as RACTabPanelProps,
  type TabPanelsProps as RACTabPanelsProps,
  type TabProps as RACTabProps,
  type TabsProps as RACTabsProps,
  composeRenderProps
} from 'react-aria-components';
import { clsx } from 'clsx';
import { createContext, useContext } from "react";

// ============================================
// Types
// ============================================
type TabsComponent = React.FC<TabsProps> & {
  List: typeof TabsList;
  Tab: typeof TabsTab;
  Contents: typeof TabsContents;
  Content: typeof TabsContent;
};

interface TabsProps extends RACTabsProps {
  indicatorProps?: TabsIndicatorProps;
}

interface TabsListProps<T extends object> extends RACTabListProps<T> { }

interface TabsTabProps extends RACTabProps { }

interface TabsContentsProps<T extends object> extends RACTabPanelsProps<T> { }

interface TabsContentProps extends RACTabPanelProps { }

interface TabsIndicatorProps extends React.ComponentProps<typeof RACSelectionIndicator> { }

interface TabsContext {
  indicatorProps: TabsIndicatorProps | undefined;
  orientation?: VariantProps<typeof tabs>['orientation'];
}

// ============================================
// Styles
// ============================================
const tabs = tv({
  base: 'tabs-base',
  variants: {
    orientation: {
      horizontal: 'tabs-horizontal',
      vertical: 'tabs-vertical'
    },
    isDisabled: {
      true: 'tabs-disabled'
    }
  },
  defaultVariants: {
    orientation: 'horizontal'
  }
})

const tabsList = tv({
  base: 'tabs-list-base',
  variants: {
    orientation: {
      horizontal: 'tabs-list-horizontal',
      vertical: 'tabs-list-vertical'
    }
  },
  defaultVariants: {
    orientation: 'horizontal'
  }
})

const tabsTab = tv({
  base: 'tabs-tab-base',
  variants: {
    orientation: {
      horizontal: 'tabs-tab-horizontal',
      vertical: 'tabs-tab-vertical'
    }
  },
  defaultVariants: {
    orientation: 'horizontal'
  }
})

const tabsIndicator = tv({
  base: 'tabs-indicator-base',
  variants: {
    orientation: {
      horizontal: 'tabs-indicator-horizontal',
      vertical: 'tabs-indicator-vertical',
    }
  },
  defaultVariants: {
    orientation: 'horizontal'
  }
})

const tabsContents = tv({
  base: 'tabs-contents-base',
})

const tabsContent = tv({
  base: 'tabs-content-base',
  variants: {
    isEntering: {
      true: 'tabs-content-entering'
    },
    isExiting: {
      true: 'tabs-content-exiting'
    }
  }
})

// ============================================
// Context
// ============================================
const TabsContext = createContext<TabsContext>({
  indicatorProps: undefined
})

// ============================================
// Components
// ============================================
const Tabs: TabsComponent = ({
  children,
  orientation = 'horizontal',
  indicatorProps,
  ...props
}: TabsProps) => {
  return (
    <TabsContext.Provider value={{ indicatorProps, orientation }}>
      <RACTabs
        {...props}
        className={composeRenderProps(
          props.className,
          (className, renderProps) => tabs({ ...renderProps, className, orientation, isDisabled: props.isDisabled })
        )}
      >
        {children}
      </RACTabs>
    </TabsContext.Provider>
  )
}

function TabsList<T extends object>({
  children,
  className,
  ...props
}: TabsListProps<T>) {
  const { orientation } = useContext(TabsContext);

  return (
    <RACTabList
      aria-label="Tabs"
      {...props}
      className={composeRenderProps(
        className,
        (className, renderProps) => tabsList({ ...renderProps, className, orientation })
      )}
    >
      {children}
    </RACTabList>
  )
}

function TabsTab({
  children,
  className,
  ...props
}: TabsTabProps) {
  const { indicatorProps, orientation } = useContext(TabsContext);

  return (
    <RACTab
      {...props}
      className={composeRenderProps(
        className,
        (className, renderProps) => tabsTab({ ...renderProps, className, orientation })
      )}
    >
      {composeRenderProps(children, children => (<>
        {children}
        <RACSelectionIndicator
          {...indicatorProps}
          className={tabsIndicator({
            orientation,
            className: clsx(indicatorProps?.className),
          })}
        />
      </>))}
    </RACTab>
  )
}

function TabsContents<T extends object>({
  children,
  className,
  ...props
}: TabsContentsProps<T>) {
  return (
    <RACTabPanels
      {...props}
      className={tabsContents({ className })}
    >
      {children}
    </RACTabPanels>
  )
}

function TabsContent({
  children,
  className,
  ...props
}: TabsContentProps) {
  return (
    <RACTabPanel
      {...props}
      className={composeRenderProps(
        className,
        (className, renderProps) => tabsContent({ ...renderProps, className })
      )}
    >
      {children}
    </RACTabPanel>
  )
}

// ============================================
// Namespace Pattern
// ============================================
Tabs.List = TabsList;
Tabs.Tab = TabsTab;
Tabs.Contents = TabsContents;
Tabs.Content = TabsContent;

Tabs.displayName = 'Tabs';
TabsList.displayName = 'Tabs.List';
TabsTab.displayName = 'Tabs.Tab';
TabsContents.displayName = 'Tabs.Contents';
TabsContent.displayName = 'Tabs.Content';

// ============================================
// Exports
// ============================================
export {
  Tabs,
  TabsList,
  TabsTab,
  TabsContents,
  TabsContent,

  type TabsProps,
  type TabsListProps,
  type TabsTabProps,
  type TabsContentsProps,
  type TabsContentProps,
}