import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import styles from './styles.module.css'
import { useLayout } from 'provider/LayoutProvider';

const DashboardLayout = () => {
  const { openSidebar, setOpenSidebar } = useLayout();

  const handleToggleSidebar = () => {
    setOpenSidebar(!openSidebar)
  }

  return (
    <div className="flex flex-column min-h-screen">
      <Navbar
        open={openSidebar}
        onToggle={handleToggleSidebar}
      />
      <main className={`flex-grow-1 flex ${styles.main}`}>
        <Sidebar open={openSidebar} />
        <div className="flex flex-grow-1 flex-column overflow-auto p-3" id="main-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
