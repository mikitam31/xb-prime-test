import { ColumnProp, Table } from 'components'

const paymentColumns: ColumnProp[] = [
  { title: 'ID', key: 'pid' },
  { title: 'Gateway', key: 'gateway' },
  { title: 'Type', key: 'type' },
  { title: 'Amount', key: 'amount' },
  { title: 'Status', key: 'status' },
  { title: 'Datetime', key: 'datetime' },
]

export type PaymentsProps = {
  payments: Record<string, number | string>[]
}

export const Payments = ({ payments }: PaymentsProps) => {
  return (
    <Table columns={paymentColumns} data={payments} />
  )
}
