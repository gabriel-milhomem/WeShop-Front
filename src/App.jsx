import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import ClientModal from './components/Modals/ClientModal';
import InfoModal from './components/Modals/InfoModal';
import OrderModal from './components/Modals/OrderModal';
import ProductModal from './components/Modals/ProductModal';
import { AppProvider } from './contexts/AppContext';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles';

export function App() {
  return (
    <AppProvider>
      <ClientModal />
      <ProductModal />
      <OrderModal />
      <InfoModal />
      <GlobalStyle />
      <Home />
      <ToastContainer />
    </AppProvider>
  );
}
