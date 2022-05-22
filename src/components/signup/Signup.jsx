import { useRef } from "react"

const API_URL = "http://localhost:5000"

export const Signup = () => {

  const nameRef = useRef()
  const emailRef = useRef()
  const pwRef = useRef()

  const onSignupSubmit = async (e) => {

    e.preventDefault() 

    console.log("Submitted")

    const userSignup = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: pwRef.current.value,
    }

    console.log(userSignup)

    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      body: JSON.stringify(userSignup), 
      headers: {
        "Content-Type": "application/json"
      }
    })

    const userNewApi = await response.json()

    console.log( userNewApi )
  }

  return (
    <form onSubmit={onSignupSubmit}>
      <div>
        <input type="text" ref={nameRef} placeholder="Username..." />
      </div>
      <div>
        <input type="text" ref={emailRef} placeholder="Email..." />
      </div>
      <div>
        <input type="password" ref={pwRef} placeholder="Password..." />
      </div>
      <div>
        <button type="submit">Signup</button>
      </div>
    </form>
  )
}