import React, { useContext, useState } from 'react';

const LayoutContext = React.createContext({
  openSidebar: false,
  setOpenSidebar: () => { }
});

export default function LayoutProvider(props) {
  const { children } = props;
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <LayoutContext.Provider value={{ openSidebar, setOpenSidebar }}>
      {children}
    </LayoutContext.Provider>
  )
}

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('LayoutContext not found');
  }
  return useContext(LayoutContext);
}
