import { useActionState } from 'react'
import SubmintButton from '../hooks/useFormHook'

const UseStateAction = () => {
  const [data, formAction, pending] = useActionState(handleSubnmit, {
    data: null,
    error: null,
  })
  function handleSubnmit(preState, formData) {
    console.log(preState)
    const email = formData.get('email')
    const password = formData.get('password')
    console.log(email, password, data)
  }
  return (
    <>
      <div>
        <form action={formAction}>
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            spellCheck="true"
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="enter your password"
            spellCheck="true"
          />
          <br />
          <br />
          < SubmintButton/>
        </form>
      </div>
    </>
  )
}

export default UseStateAction
