import React, { useState, useRef } from "react"
import { useNavigate, NavLink } from "react-router-dom"


const backgroundImageUrl = `${process.env.PUBLIC_URL}/assets/signup.png`

const SignUp = ({ signup }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const navigate = useNavigate()
  const formRef = useRef()

  const handleSignUp = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
  const data = Object.fromEntries(formData)
  const userInfo = {
    user: { email: data.email, password: data.password }
  }
  signup(userInfo)
  navigate("/")
  e.target.reset() 
}
}

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Get started now</h1>
        <div className="social-buttons">
          <button className="social-button">Sign up with Google</button>
          <button className="social-button">Sign up with Facebook</button>
        </div>
        <div className="divider">OR</div>
        <form ref={formRef} onSubmit={handleSignUp}>
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
              placeholder="Enter at least 8+ characters"
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
            <a
              href="#"
              className="forgot-password"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot password?
            </a>
          </div>
          <button onClick={() => signup} type="submit" className="signup-button">
            Sign up
          </button>
        </form>
        <div className="sign-up-redirect">
          <p>
            Have an account? <NavLink to="/login">Sign in</NavLink>
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

export default SignUp