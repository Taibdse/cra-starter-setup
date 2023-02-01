import React from "react"
import styles from './styles.module.css';
import { NavLink } from "react-router-dom";

const navlinks = [
  {
    to: '/',
    label: 'Home',
    icon: 'pi-home'
  },
  {
    to: '/a',
    label: 'Page A',
    icon: 'pi-database'
  },
  {
    to: '/b',
    label: 'Page B',
    icon: 'pi-check-square'
  },
]

const Sidebar = (props) => {
  const { open } = props;
  const user = { name: 'test' };

  const containerClasses = `${styles.container} ${open ? styles.open : ''}`;

  return (
    <div className={containerClasses}>
      <div className="flex flex-column">
        <div className="flex align-items-center relative mb-2 px-3">
          {open && (<p className="truncate">Welcome {user?.name.split(' ')[0]}</p>)}
        </div>
      </div>
      {
        navlinks.map((navlink) => {
          return (
            <NavLink to={navlink.to} key={navlink.to} className={`block ${styles.navlink}`}>
              <div className={`flex align-items-center justify-content-${open ? "start" : "center"} p-3 `}>
                {navlink?.icon && (<i className={`pi ${navlink.icon} ${open ? 'mr-2' : ''}`} />)}
                {open && navlink.label}
              </div>
            </NavLink>
          );
        })
      }
</div>
  );
}

export default Sidebar;
