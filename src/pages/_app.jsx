import { Provider } from 'react-redux';
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";

import {makeStore} from '../store/store';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const store = makeStore(pageProps.initialState);
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;