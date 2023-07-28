import { InputHTMLAttributes } from 'react'
import { classNames } from 'utils'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  placeholder?: string
  name: string
  label?: string
  value: string
  className?: string
  maxDigits?: number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
  placeholder, name, label, value, error, className = '', maxDigits, onChange, ...props
}: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (maxDigits) {
      const { value } = event.target
      const validated = (value.toString().split('.')[1]?.length || 0) <= maxDigits
      if (!validated) return
    }
    onChange(event)
  }

  return (
    <div>
      <div>
        { label && (
          <label htmlFor={ name }>{label}</label>
        )}
      </div>
      <div>
        <input
          onChange={ handleChange }
          value={value}
          id={name}
          className={ classNames(
            'block px-2 py-2 border-2 border-primary outline-none',
            'invalid:border-red-400',
            className
          )}
          placeholder={placeholder}
          name={name}
          {...props}
        />
      </div>
    </div>
  )
}
