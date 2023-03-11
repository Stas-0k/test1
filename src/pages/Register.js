const Register = () => {
  return (
    <div>
      <h1>Welcome to registration form!</h1>

      <form autoComplete="off">
        <label>
          Name
          <input type="text" name="name"  />
        </label>

        <label>
          E-mail
          <input type="email" name="email"  />
        </label>

        <label>
          Password
          <input type="password" name="password" />
        </label>

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Register
