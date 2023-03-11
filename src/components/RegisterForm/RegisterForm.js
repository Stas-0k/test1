import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
      const form = evt.target;
      console.log(form.elements.name.value)
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <div>
      <h1>Welcome to registration form!</h1>

      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" />
        </label>

        <label>
          E-mail
          <input type="email" name="email" />
        </label>

        <label>
          Password
          <input type="password" name="password" />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
