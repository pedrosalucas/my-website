import React from 'react';
import styles from './index.module.scss'; 
import ToggleLang from '../ToggleLang';
import ToggleTheme from '../ToggleTheme';


function Sidebar(props) {
    return (
      <div {...props}>
        <nav className={styles.nav}>
          <ToggleTheme />

          <ToggleLang />
        </nav>
      </div>
    );
}

export default Sidebar;
