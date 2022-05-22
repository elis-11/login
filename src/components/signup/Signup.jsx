import { useRef } from "react";

// console.log(process.env.REACT_APP_API_URL);

export const Signup = () => {

  const nameRef = useRef();
  const emailRef = useRef();
  const pwRef = useRef();

  const onSignupSubmit = async (e) => {
    e.preventDefault();

    console.log("Submited");

    const userSignup = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: pwRef.current.value,
    }; 
    console.log(userSignup);

    // const response = await fetch(`${process.env.REACT_APP_API_URL }/users`, {
    const response = await fetch(`${process.env.REACT_APP_API_URL }/users`, {
      method: "POST",
      body: JSON.stringify(userSignup),
      headers: {
        "Connect-Type": "application/json",
      },
    //   credentials: "include",
    }); 

    const userNewApi = await response.json();

    console.log(userNewApi);
  };

  return (
    <form onSubmit={onSignupSubmit}>
      <div>
        <input type="text" ref={nameRef} placeholder="Username..." />
      </div>
      <div>
        <input type="text" ref={emailRef} placeholder="Email..." />
      </div>
      <div>
        <input type="text" ref={pwRef} placeholder="Password..." />
      </div>
      <div>
        <button type="submit">Signup</button>
      </div>
    </form>
  );
};
