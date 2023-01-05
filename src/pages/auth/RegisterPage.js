import { Helmet } from 'react-helmet-async';
// sections
import Register from '../../sections/auth/Register';

// ----------------------------------------------------------------------

export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title> Register | İmece Usûlü</title>
      </Helmet>

      <Register />
    </>
  );
}
