import React from 'react'

const Login = () => {
  const handleSubnmit = (formData) => {
    const email = formData.get('email')
    const password = formData.get('password')
    console.log(email, password)
  }

  return (
    <>
      <div>
        <form action={handleSubnmit}>
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

export default Login
