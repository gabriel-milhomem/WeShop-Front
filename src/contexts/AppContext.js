import { createContext, useState } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

const AppContext = createContext();

export default AppContext;

export function AppProvider({ children }) {
  const [orders, setOrders] = useLocalStorage([]);
  const [showOrders, setShowOrders] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentOrderView, setCurrentOrderView] = useState(0);

  return (
    <AppContext.Provider
      value={{
        showOrders,
        setShowOrders,
        orders,
        setOrders,
        loading,
        setLoading,
        currentOrderView,
        setCurrentOrderView
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
