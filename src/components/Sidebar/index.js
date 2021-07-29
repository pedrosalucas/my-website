import React from 'react';
import ToogleTheme from '../ToggleTheme';


function Sidebar(props) {
    return (
        <div {...props}>
          <nav>

            <ToogleTheme />
          </nav>
        </div>
    );
}

export default Sidebar;
