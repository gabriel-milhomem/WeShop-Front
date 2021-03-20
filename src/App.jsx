import { ToastContainer } from 'react-toastify';

import { AppProvider } from './contexts/AppContext';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles';

import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <Home />
      <ToastContainer />
    </AppProvider>
  );
}
