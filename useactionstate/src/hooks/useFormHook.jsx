import React from 'react'
import { useFormStatus } from 'react-dom'

const SubmintButton = () => {
  const { pending } = useFormStatus()
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Logging in...' : 'Login'}
    </button>
  )
}

export default SubmintButton
