import React from "react"
import styles from './styles.module.css';
import { Menu } from "primereact/menu";

const Sidebar = (props) => {
  const { open } = props;
  const user = { name: 'test' };

  const containerClasses = `${styles.container} ${open ? styles.open : ''}`;

  const items = [
    { label: 'New', icon: 'pi pi-fw pi-plus' },
    { label: 'Delete', icon: 'pi pi-fw pi-trash' }
  ];

  return (
    <div className={containerClasses}>
      <div className={open ? styles.greeting : styles['greeting--minimal']}>
        <div className={`${styles.message} ${!open ? styles['message--minimal'] : ''}`}>
          {open && (<p className="truncate">Hey {user?.name.split(' ')[0]} welcome back</p>)}
        </div>
      </div>
      <Menu model={items} />
      {/* {menuGroupItems.map((menuItems, idx) => (
        <ul key={idx} className={styles.group}>
          {menuItems.map((menuItem) => (
            <React.Fragment key={menuItem.label}>
              {!open && (<Tooltip target={`.${menuItem.tooltipClassName}`} hideDelay={5} baseZIndex={100} appendTo="self" />)}
              <NavLink
                to={menuItem.to}
                Icon={menuItem.icon}
                IconActive={menuItem.IconActive}
                open={open}
                label={menuItem.label}
                className={menuItem.tooltipClassName}
                data-pr-tooltip={menuItem.label}
                data-pr-position="right"
              />
            </React.Fragment>
          ))}
        </ul>
      ))} */}
    </div>
  );
}

export default Sidebar;
