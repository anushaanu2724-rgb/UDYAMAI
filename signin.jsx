import { useState } from "react";
function Signin() {
    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div className="signin-page">
      <div className="signin-card">

        <h1>Welcome Back</h1>
        <p>Sign in to continue to UDYAMAI</p>

        <div className="signin-group">
          <label>Email / Mobile Number</label>
          <input
  type="text"
  placeholder="Enter your email or mobile number"
  value={loginId}
  onChange={(e) => setLoginId(e.target.value)}
/>
        </div>

        <div className="signin-group">
          <label>Password</label>
          <input
  type="password"
  placeholder="Enter your password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
        </div>

        <div className="signin-options">
          <label>
            <input type="checkbox" />
            Remember me
          </label>

          <button className="forgot-btn">
            Forgot Password?
          </button>
        </div>

        <button
  className="signin-submit"
  onClick={() => {
    if (!loginId || !password) {
      alert("Please enter your email/mobile number and password.");
      return;
    }

    alert("Sign In successful!");
    window.location.href = "/";
  }}
>
  Sign In
</button>

        <p className="signup-text">
          Don't have an account?{" "}
          <button className="signup-btn"
          onClick={() => 
          (window.location.href = "/signup")}
          >
            Create Account
          </button>
        </p>

      </div>
    </div>
  );
}

export default Signin;