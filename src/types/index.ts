export type PersonalDetail = {
  client_id: string
  firstname: string
  lastname: string
  country: string
  address1: string
  address2: string
  city: string
  postcode: string
  phone: string
  email: string
  status: string
  invited_by_affiliate: string
}

export type Wallet = {
  currency: string
  balance: number
}

export type TradingAccount = {
  taid: string | number
  accounty_type: string
  platform: string
  balance: number
}

export type Note = {
  datetime: string
  note_text: string
}

export type Activity = {
  datetime: string
  activity_test: string
}

export type Payment = {
  pid: number
  gateway: string
  type: string
  amount: number
  status: string
  datetime: string
}

export type Customer = PersonalDetail & {
  wallet: Wallet
  trading_accounts: TradingAccount[]
  payments: Payment[]
  notes: Note[]
  activity: Activity[]
}
