import { Fragment } from 'react'
import { Transition, Menu as HMenu, MenuProps, MenuButtonProps, MenuItemsProps, MenuItemProps } from '@headlessui/react'
import { classNames } from 'utils'

const MenuRoot = ({ children, className, ...props }: MenuProps<'div'>) => {
  return (
    <HMenu as="div" className={ classNames(
      'relative inline-block text-left',
      className
    )} {...props}>
      {children}
    </HMenu>
  )
}

const Button = ({ children, className, ...props }: MenuButtonProps<'button'>) => {
  return (
    <HMenu.Button
      className={ classNames(
        'w-full bg-primary text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 disabled:bg-gray-500',
        className
      ) }
      { ...props }
    >
      {children}
    </HMenu.Button>
  )
}

const Items = ({ children, className, ...props }: MenuItemsProps<'div'>) => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <HMenu.Items
        className={ classNames(
          'flex flex-col text-center absolute left-0 mt-1 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-primary ring-opacity-5 focus:outline-none',
          className
        ) }
        { ...props }
      >
        {children}
      </HMenu.Items>
    </Transition>
  )
}

const Item = ({ as = 'button', children, className, ...props }: MenuItemProps<'button'>) => {
  return (
    <HMenu.Item
      as={as}
      className={ classNames(
        'py-2 px-2 w-full cursor-pointer',
        className
      ) }
      { ...props }
    >
      {children}
    </HMenu.Item>
  )
}

export type MenuItemRenderPropArg = {
  active: boolean
  disabled: boolean
  close: () => void
}

export const Menu = Object.assign(MenuRoot, { Button, Items, Item })
