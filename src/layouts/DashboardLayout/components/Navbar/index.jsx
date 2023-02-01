import { useRef } from "react";
import { Avatar } from 'primereact/avatar';
import { Menu } from "primereact/menu";
import { ReactComponent as Starred } from 'assets/images/icons/StarredMsg.svg';
import { ReactComponent as Mentioned } from 'assets/images/icons/Mentioned.svg';
import { ReactComponent as Reminder } from 'assets/images/icons/Reminder.svg';
import { ReactComponent as Calender } from 'assets/images/icons/Calender.svg';
import MenuIcon from 'assets/images/icons/Menu.svg';
import CloseIcon from 'assets/images/icons/Close.svg';
import styles from './styles.module.css';

const Navbar = (props) => {
  const { open = false, onToggle } = props;
  const menuRef = useRef(null);
  const user = { name: 'test' };

  const handleLogout = () => {
  }

  const handleShowUserMenu = (event) => {
    menuRef.current.toggle(event)
  }

  const userMenuItems = [
    {
      label: user?.name,
      items: [
        {
          label: 'Logout',
          command: handleLogout
        }
      ]
    },
  ];

  return (
    <div className={styles.container}>
      <header className={styles['left-nav']}>
        {
          open
            ? (<div className="p-d-flex p-jc-between w-100">
              <h2>LOGO</h2>
              <button onClick={onToggle}><img src={CloseIcon} /></button>
            </div>)
            : (<button onClick={onToggle} ><img src={MenuIcon} /></button>)
        }
      </header>
      <ul className={styles['right-nav']}>
        <li className={styles['right-nav__item']}>
          <a href="#"><Starred title="star" /></a>
        </li>
        <li className={styles['right-nav__item']}>
          <a href="#"><Mentioned title="mention" /></a>
        </li>
        <li className={styles['right-nav__item']}>
          <a href="#"><Reminder title="reminder" /></a>
        </li>
        <li className={styles['right-nav__item']}>
          <a href="#"><Calender title="calender" /></a>
        </li>
      </ul>
      <Avatar label={user?.name[0].toUpperCase()} shape="circle" className={`p-mx-4 ${styles.avatar}`} onClick={handleShowUserMenu} />
      <Menu model={userMenuItems} popup ref={menuRef} />
    </div>
  );
}

export default Navbar;
