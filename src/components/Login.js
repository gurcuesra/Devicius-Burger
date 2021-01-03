function Login() {
  return (
    <form>
      <h1>Login to start creating a burger!</h1>
      <label htmlFor="username">Username: </label>
      <input type="text" id="username" name="username" autoComplete="off"/>
      <br/>
      <label htmlFor="user-pw">Password: </label>
      <input type="password" id="user-pw" name="user-pw"/>
      <br/>
      <input type="button" value="Login"/>
    </form>
  )
}

export default Login;