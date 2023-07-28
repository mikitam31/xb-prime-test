import React, { useState } from 'react'

export type InputHandler = {
  value: string
  setValue: (value: string) => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const useInput = (initial: string = ''): InputHandler => {
  const [ value, setValue ] = useState<string>(initial)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return {
    value,
    onChange: handleChange,
    setValue
  };
}
