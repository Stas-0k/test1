import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';


export const LoginForm = () => {

    const dispatch = useDispatch()
    
    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget

        dispatch(
            login({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        )
        form.reset();
    }



  return (
    <div>
      <h1>Welcome to Login page!</h1>

      <form autoComplete="off" onSubmit={handleSubmit}>
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
