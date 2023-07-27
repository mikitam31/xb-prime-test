import { Fragment, useState } from 'react'
import { Button, Modal } from 'components'

export const Profile = () => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant='default' onClick={ () => setOpen(true) }>open modal</Button>

      <Modal open={open} onClose={handleClose} title="test modal">
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Your payment has been successfully submitted. We’ve sent
            you an email with all of the details of your order.
          </p>
        </div>

        <div className="mt-4">
          <Button variant="primary" onClick={handleClose}>Got it</Button>
        </div>
      </Modal>
    </div>
  )
}
