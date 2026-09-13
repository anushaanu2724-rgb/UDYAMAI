import { useState } from "react";
function Signup() {
    const [name, setName] = useState("");
    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="signin-page">
      <div className="signin-card">

        <h1>Create Account</h1>

        <p>
          Create your UDYAMAI account
        </p>

        <div className="signin-group">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) =>
                setName(e.target.value)
            }
          />
        </div>

        <div className="signin-group">
          <label>Email / Mobile Number</label>
          <input
            type="text"
            placeholder="Enter your email or mobile number"
            value={loginId}
            onChange={(e) =>
                setLoginId(e.target.value)
            }
          />
        </div>

        <div className="signin-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) =>
                setPassword(e.target.value)}
            
          />
        </div>

        <div className="signin-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) =>
                setConfirmPassword(e.target.value)}
            
          />
        </div>

      <button
  className="signin-submit"
  onClick={() => {
    if (!name || !loginId || !password || !confirmPassword) {
      alert("Please fill all the details.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    localStorage.setItem(
      "udymaiAccount",
      JSON.stringify({
        name,
        loginId,
        password
      })
    );

    alert("Account created successfully!");
    window.location.href = "/signin";
  }}
>
  Create Account
</button>

      </div>
    </div>
  );
}

export default Signup;