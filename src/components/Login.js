import { useEffect, useState } from "react";
import { useLogin } from "../hook/useLogin";
import { useAuthContext } from "../hook/useAuthContext";

function Login() {


  const { user } = useAuthContext()


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, isLoading, error } = useLogin()

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log in</h3>

      <label>Email:</label>
      <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />

      <label>Password</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />

      <button disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}
    </form>
  )

}

export default Login;