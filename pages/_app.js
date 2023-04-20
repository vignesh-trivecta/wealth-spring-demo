import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import '@/styles/globals.css';
// import UserContext from '@/contexts/useUserContext';
import { Provider } from 'react-redux';
import store from '../store/store';
import { persistor } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';

import { useEffect } from 'react';

function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    // <UserContext>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
        </PersistGate>
      </Provider>
    // </UserContext> 
  );
}

export default App;
