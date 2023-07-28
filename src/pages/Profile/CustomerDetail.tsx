import { Menu } from 'components'
import { Customer } from 'types'
import { TradingAccounts } from './TradingAccounts';

export type PersonalDetailProps = {
  customer: Customer
}

export const CustomerDetail = ({ customer }: PersonalDetailProps) => {
  return (
    <>
      <h5 className="mb-1 text-xl font-medium text-primary">
        {`${customer.firstname} ${customer.lastname} (${customer.client_id})`}
      </h5>
      <span className="w-fit rounded-md ring-1 ring-secondary bg-primary/10 text-primary/80 leading-none px-1 py-1">
        { customer.status }
      </span>
      <address className='block text-sm my-10'>
        <a href={ `mailto:${customer.email}` } className="text-secondary">{customer.email}</a> <br />
        <a href={ `tel:${customer.phone}` } className="text-secondary">{customer.phone}</a> <br />
        { customer.address1 } { customer.address2 }<br />
        { customer.city } { customer.postcode } <br />
        { customer.country }
      </address>

      <TradingAccounts accounts={customer.trading_accounts} />

      <Menu as="div" className="mt-20 w-full">
        <Menu.Button>Settings</Menu.Button>
        <Menu.Items>
          <Menu.Item>Change Email</Menu.Item>
          <Menu.Item>Change Password</Menu.Item>
          <Menu.Item>Update Profile</Menu.Item>
          <Menu.Item>Logout</Menu.Item>
        </Menu.Items>
      </Menu>
    </>
  )
}
