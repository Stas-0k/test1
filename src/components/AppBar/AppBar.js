import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';

export function AppBar() {
  return (
    <header>
      <Navigation/>
      <AuthNav/>
    </header>
  );
}
