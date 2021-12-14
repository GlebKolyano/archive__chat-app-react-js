import axios from "axios"
import { useState } from "react"


const LoginForm = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const authObj = {"Project-ID": "5a87c640-9704-4722-ac84-853fdc7f5e87", "User-Name": userName, "User-Secret": password}
    try {
      await axios.get('https://api.chatengine.io/chats', {headers: authObj})

      localStorage.setItem("username", userName)
      localStorage.setItem("password", password)
      window.location.reload()
    } catch (error) {
      setError('Incorrect credentials...')
    }
    }
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <div className="loginAndPassword">use username: admin and the same password </div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="input" placeholder="Username" required/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  )
}

export default LoginForm