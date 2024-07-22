import { useActionState } from 'react'

const UseStateAction = () => {
  const [data, formAction] = useActionState(handleSubnmit, {
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
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default UseStateAction
