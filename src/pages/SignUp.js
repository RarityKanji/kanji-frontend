import React, { useState, useRef } from "react"
import { useNavigate, NavLink } from "react-router-dom"

const backgroundImageUrl = `${process.env.PUBLIC_URL}/assets/signup.png`

const SignUp = ({ signup }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const navigate = useNavigate()
  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      user: { email: data.email, password: data.password }
    }
    signup(userInfo).then(() => {
      navigate("/")
    }).catch(error => {
      console.error('Signup failed', error)
    })
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
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="example.email@gmail.com"
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter at least 8+ characters"
              required
            />
            <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
          <button type="submit" className="signup-button">Sign up</button>
        </form>
        <div className="sign-in-redirect">
          <p>Have an account? <NavLink to="/login">Sign in</NavLink></p>
        </div>
      </div>
      <div className="signup-image" style={{ backgroundImage: `url(${backgroundImageUrl})` }}></div>
    </div>
  )
}

export default SignUp