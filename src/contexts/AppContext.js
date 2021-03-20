import { createContext, useState } from 'react';

const AppContext = createContext();

export default AppContext;

export function AppProvider({ children }) {
  const [showOrders, setShowOrders] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [clientModal, setClientModal] = useState(false);
  const [productModal, setProductModal] = useState(false);
  const [orderModal, setOrderModal] = useState(false);
  const [orders, setOrders] = useState([]);

  return (
    <AppContext.Provider
      value={{
        showOrders,
        setShowOrders,
        infoModal,
        setInfoModal,
        clientModal,
        setClientModal,
        productModal,
        setProductModal,
        orderModal,
        setOrderModal,
        orders,
        setOrders
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
