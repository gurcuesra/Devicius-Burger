function Login(props) {
  function handleUsername(e) {
    props.username(e.target.value);
  }

  function handlePassword(e) {
    props.password(e.target.value);
  }
  return (
    <form>
      <h1>Login to start creating a burger!</h1>
      <label htmlFor="username">Username: </label>
      <input type="text" id="username" name="username" autoComplete="off" onInput={handleUsername}/>
      <br/>
      <label htmlFor="user-pw">Password: </label>
      <input type="password" id="user-pw" name="user-pw" onInput={handlePassword}/>
      <br/>
      <input type="button" value="Login" onClick={props.checkUser}/>
    </form>
  )
}

export default Login;