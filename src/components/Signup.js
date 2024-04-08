import { useState, useEffect } from "react";
import { useSignup } from "../hook/useSignup";
import { useAuthContext } from "../hook/useAuthContext";


function Signup() {

  const { user } = useAuthContext()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup, isLoading, error } = useSignup()

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)

  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label>Email:</label>
      <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />

      <label>Password</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  )

}

export default Signup;