import { MouseEvent } from 'react'

export type VariantTypes = 'primary' | 'secondary' | 'default'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean
  variant?: VariantTypes
  children: React.ReactNode
}

const backgroundMap: Record<VariantTypes, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  default: 'bg-white'
}

const textMap: Record<VariantTypes, string> = {
  primary: 'text-white',
  secondary: 'text-white',
  default: 'text-primary'
}

export const Button = ({ className = '', disabled, variant = 'default', onClick, ...props }: ButtonProps) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      onClick(event)
    }
  }

  const classes = `${backgroundMap[variant]} ${textMap[variant]} rounded-md px-4 py-2 text-sm font-medium hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 disabled:bg-gray-500`

  return (
    <button
      className={`${classes} ${className}`}
      disabled={disabled}
      { ...props }
      onClick={handleClick}
    />
  )
}
