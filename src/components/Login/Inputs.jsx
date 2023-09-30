
const Inputs = () => {
  return (
    <>
         <input
        type="email"
        className="common-input"
        placeholder="Enter your Email"
        onChange={(e) =>
          setCredentials({ ...credentails, email: e.target.value })
        }
      />
      <input
        type="text"
        className="common-input"
        placeholder="Enter your Password"
        onChange={(e) =>
          setCredentials({ ...credentails, password: e.target.value })
        }
      />
      <button onClick={login} className="login-btn">
        Log in to Likedin
      </button>
    </>
  )
}

export default Inputs
