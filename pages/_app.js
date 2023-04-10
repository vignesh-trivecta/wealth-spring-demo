import 'bootstrap/dist/css/bootstrap.css'; 
import '@/styles/globals.css';
import UserContext from '@/contexts/useUserContext';

import { useEffect } from 'react';

function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <UserContext>
      <Component {...pageProps} />
    </UserContext>
  );
}

export default App;
