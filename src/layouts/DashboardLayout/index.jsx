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
    <div className={styles.wrapper}>
      <Navbar
        open={openSidebar}
        onToggle={handleToggleSidebar}
      />
      <div className={styles.content}>
        <Sidebar open={openSidebar} />
        <div className={styles.main} id="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
