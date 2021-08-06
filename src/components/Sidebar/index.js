import React from 'react';
import ToggleLang from '../ToggleLang';
import ToggleTheme from '../ToggleTheme';


function Sidebar(props) {
    return (
      <div {...props}>
        <nav>
          <ToggleTheme />

          <ToggleLang />
        </nav>
      </div>
    );
}

export default Sidebar;
