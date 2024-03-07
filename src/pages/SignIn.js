import React, { useState, useRef } from "react"
import { useNavigate, NavLink } from "react-router-dom"

const logoPath = `${process.env.PUBLIC_URL}/assets/logo.png`
const backgroundImageUrl = `${process.env.PUBLIC_URL}/assets/superman.png`

const SignIn = ({login}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const navigate = useNavigate()
  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    // create an object from the entries
    const data = Object.fromEntries(formData)
    // store user's info in format that can be used with JWT
    const userInfo = {
      user: { email: data.email, password: data.password } 
   }
    login(userInfo)
    navigate("/")
    e.target.reset() // resets the input field
}
  

  return (
    <div className="signup-container">
      <div className="signup-form">
        <img src={logoPath} alt="Kanji Logo" className="logo" />
        <h1>Sign In</h1>
        <div className="social-buttons">
          <button className="social-button">Sign in with Google</button>
          <button className="social-button">Sign in with Facebook</button>
        </div>
        <div className="divider">OR</div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="example.email@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
          <div className="options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember me
            </label>
            <NavLink to="/forgot-password" className="forgot-password">
              Forgot password?
            </NavLink>
          </div>
          <button type="submit" className="signup-button">
            Sign In
          </button>
        </form>
        <div className="sign-up-redirect">
          <p>
            Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
          </p>
        </div>
      </div>
      <div
        className="signup-image"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      ></div>
    </div>
  )
}

export default SignIn
