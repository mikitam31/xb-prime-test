import { TradingAccount } from 'types'

export type TradingAccountsProps = {
  accounts: TradingAccount[]
}

export const TradingAccounts = ({ accounts }: TradingAccountsProps) => {
  return (
    <div>
      <h3>Trading Accounts</h3>

      <ol className="list-desc">
        { accounts.map(account => (
          <li key={account.taid}>
            {`${account.platform} - ${account.accounty_type} - ${account.balance}`}
          </li>
        ))}
      </ol>
    </div>
  )
}
