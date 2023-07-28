import { Wallet } from 'types'

export type BalanceProps = {
  wallet: Wallet
}

export const Balance = ({ wallet }: BalanceProps) => {
  return (
    <div className="text-right">
      { `Balance: ${wallet.currency} ${wallet.balance}` }
    </div>
  )
}
