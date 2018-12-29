import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from "routesConfig/basicRoutes";
import styles from './NavBar.less'

const NavBar = () => (
  <section className={styles.menu}>
    <ul>
      {
        routes.map(route => (
          <li key={route.path} className={styles.menuItem}>
            <NavLink exact={route.exact} to={route.path} activeClassName={styles.active}>{route.name}</NavLink>
          </li>
        ))
      }
    </ul>
  </section>
)

export default NavBar;