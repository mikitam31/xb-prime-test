import { Button, Input } from 'components'
import { useInput } from 'hooks'

export type AmountFormProps = {
  onSave: (amount: number, platform: string) => void
  onCancel: () => void
}

export const AmountForm = ({ onSave, onCancel }: AmountFormProps) => {
  const amount = useInput('')
  const platform = useInput('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onSave(+amount.value, platform.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Amount"
        name="amount"
        placeholder="0.00"
        className="mb-5"
        maxDigits={2}
        {...amount}
      />
      <Input
        label="Platform"
        name="platform"
        placeholder={"platform"}
        {...platform}
      />

      <div className="flex gap-3">
        <Button variant="primary" type="submit" className="mt-10">Proceed</Button>
        <Button variant="default" className="mt-10" onClick={onCancel}>Cancel</Button>
      </div>
    </form>
  )
}
