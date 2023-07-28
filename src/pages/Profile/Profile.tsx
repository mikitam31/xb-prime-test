import { useState } from 'react'
import { Modal, Tab, Menu } from 'components'
import { Customer } from 'types'
import { Payments } from './Payments'
import { Notes } from './Notes'
import { Activities } from './Activities'
import { CustomerDetail } from './CustomerDetail';
import { Balance } from './Balance';
import { AmountForm } from './AmountForm';

export type ProfileProps = {
  customer: Customer
}

type ModalTypes = 'withdraw' | 'deposit' | null

export const Profile = ({ customer: basicProfile }: ProfileProps) => {
  const [customer, setCustomer] = useState<Customer>(basicProfile)
  const [modal, setModal] = useState<ModalTypes>()

  const handleClose = () => {
    setModal(null)
  }

  const handleSave = (amount: number, platform: string) => {
    if (modal) {
      const tid = Math.max(...customer.payments.map(p => +p.pid)) + 1

      const newPayment = {
        pid: tid,
        gateway: platform,
        type: modal,
        amount: amount,
        status: "approved",
        datetime: new Date().toLocaleString()
      }
      setCustomer({
        ...customer,
        wallet: {
          ...customer.wallet,
          balance: customer.wallet.balance + amount * (modal === 'deposit' ? 1 : -1)
        },
        payments: [...customer.payments, newPayment]
      })
    }
    handleClose()
  }

  return (
    <div className="flex gap-4 bg-primary/10 rounded-lg relative mx-auto w-full max-w-screen-lg">
      <div className="flex flex-col pb-10 px-2 sm:p-4 h-screen sticky top-0">
        <CustomerDetail customer={ customer } />
      </div>
      <div className="flex-auto p-4">
        <div className="flex justify-end gap-3 items-center mb-10">
          <Balance wallet={ customer.wallet } />

          <Menu as="div" className="w-50">
            <Menu.Button className="bg-secondary">Actions</Menu.Button>
            <Menu.Items className="left-auto right-0">
              <Menu.Item>Approve</Menu.Item>
              <Menu.Item>Decline</Menu.Item>
              <Menu.Item onClick={() => setModal('deposit')}>Deposit</Menu.Item>
              <Menu.Item onClick={() => setModal('withdraw')}>Withdraw</Menu.Item>
              <Menu.Item>Archive</Menu.Item>
            </Menu.Items>
          </Menu>
        </div>

        <Tab.Group>
          <Tab.List>
            <Tab>Payments</Tab>
            <Tab>Notes</Tab>
            <Tab>Activity</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <Payments payments={customer.payments} />
            </Tab.Panel>
            <Tab.Panel>
              <Notes notes={customer.notes} />
            </Tab.Panel>
            <Tab.Panel>
              <Activities activities={customer.activity} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>


      <Modal open={ !!modal } onClose={ handleClose } title={`Please enter ${modal} amount and platform`}>
        <div className="mt-2 pt-4">
          <AmountForm onSave={handleSave} onCancel={handleClose} />
        </div>
      </Modal>
    </div>
  )
}
