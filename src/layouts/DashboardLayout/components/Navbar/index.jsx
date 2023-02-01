/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRef } from "react";
import { Avatar } from "primereact/avatar";
import { Menu } from "primereact/menu";
import { ReactComponent as Starred } from "assets/images/icons/StarredMsg.svg";
import { ReactComponent as Mentioned } from "assets/images/icons/Mentioned.svg";
import { ReactComponent as Reminder } from "assets/images/icons/Reminder.svg";
import { ReactComponent as Calender } from "assets/images/icons/Calender.svg";
import { Button } from "primereact/button";

import styles from "./styles.module.css";

const Navbar = (props) => {
  const { open = false, onToggle } = props;
  const menuRef = useRef(null);
  const user = { name: "test" };

  const handleLogout = () => {};

  const handleShowUserMenu = (event) => {
    menuRef.current.toggle(event);
  };

  const userMenuItems = [
    {
      label: user?.name,
      items: [
        {
          label: "Logout",
          command: handleLogout,
        },
      ],
    },
  ];

  return (
    <header className={`flex align-items-center ${styles.nav}`}>
      <nav className={`flex align-items-center py-2 pl-3 ${styles.left}`}>
        <div className="flex justify-content-between align-items-center w-full">
          {open && <h2 className="m-0 p-0 text-white">App</h2>}
          <Button
            onClick={onToggle}
            className="p-2 ml-1 w-2rem h-2rem p-button-sm p-button-rounded p-button-text text-white"
            aria-label="toggle button"
            icon={`pi ${open ? "pi-times" : "pi-bars"} `}
          ></Button>
        </div>
      </nav>
      <ul
        className={`flex flex-grow-1 justify-content-end p-3 ${styles.right}`}
      >
        <li className={styles.item}>
          <a href="#">
            <Starred title="star" />
          </a>
        </li>
        <li className={styles.item}>
          <a href="#">
            <Mentioned title="mention" />
          </a>
        </li>
        <li className={styles.item}>
          <a href="#">
            <Reminder title="reminder" />
          </a>
        </li>
        <li className={styles.item}>
          <a href="#">
            <Calender title="calender" />
          </a>
        </li>
        <Avatar
          label={user?.name[0].toUpperCase()}
          shape="circle"
          className={`p-mx-4 ${styles.avatar}`}
          onClick={handleShowUserMenu}
        />
        <Menu model={userMenuItems} popup ref={menuRef} />
      </ul>
    </header>
  );
};

export default Navbar;
