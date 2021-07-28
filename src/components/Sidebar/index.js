import React from 'react';
import styles from './index.module.scss';


function Sidebar(props) {
    return (
        <div {...props}>
          <nav>
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={styles.slider}></span>
            </label>
          </nav>
        </div>
    );
}

export default Sidebar;
