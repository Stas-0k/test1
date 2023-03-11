const Login = () => {
  return (
    <div>
      <h1>Welcome to Login page!</h1>

      <form autoComplete="off">
        <label>
          E-mail
          <input type="email" name="email" />
        </label>

        <label>
          Password
          <input type="password" name="password" />
        </label>

        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
