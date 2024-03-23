import { Typography } from '@mui/material';

import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div>
      <ul className={css.list}>
        <li>
          {' '}
          <nav>
            <Typography variant="h4">
              <NavLink to="/">Home</NavLink>
            </Typography>
          </nav>
        </li>
        <li>
          {' '}
          <nav>
            <Typography variant="h4">
              <NavLink to="/catalog">Catalog</NavLink>
            </Typography>
          </nav>
        </li>
        <li>
          {' '}
          <nav>
            <Typography variant="h4">
              <NavLink to="/favorites">Favorites</NavLink>
            </Typography>
          </nav>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};
