import { Tab as HTab, TabProps, TabListProps, TabPanelsProps, TabPanelProps } from '@headlessui/react'
import { classNames } from 'utils'

export const Group = HTab.Group

const List = ({ children, className, ...props }: TabListProps<'div'>) => {
  return (
    <HTab.List
      className={classNames(
        'flex space-x-1 rounded-xl bg-primary/70 p-1',
        className
      )}
      { ...props }
    >
      {children}
    </HTab.List>
  )
}

const TabRoot = ({ children, className, ...props }: TabProps<'button'>) => {
  return (
    <HTab
      className={({ selected }): string =>
        classNames(
          'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-primary',
          className,
          selected
            ? 'bg-white/60 shadow'
            : 'text-primary hover:bg-white/[0.12] hover:text-white/40'
        )
      }
      {...props}
    >
      {children}
    </HTab>
  )
}

const Panels = ({ children, className, ...props }: TabPanelsProps<'div'>) => {
  return (
    <HTab.Panels
      className={ classNames('mt-2', className) }
      { ...props }
    >
      {children}
    </HTab.Panels>
  )
}

const Panel = ({ children, className, ...props }: TabPanelProps<'div'>) => {
  return (
    <HTab.Panel
      className={classNames(
        'rounded-xl px-0',
        className
      )}
      { ...props }
    >
      {children}
    </HTab.Panel>
  )
}

export const Tab = Object.assign(TabRoot, { Group, List, Panels, Panel })
