import React from 'react';
import styles from './index.module.scss';
import { LangContext } from '../../providers/LangPreference';

function Knowledge(props) {
  const { messages } = React.useContext(LangContext);
  const [currentProjectIndex, setCurrentProjectIndex] = React.useState(0);
  React.useEffect(() => {
    console.log(currentProjectIndex);
    document.getElementById(`${currentProjectIndex}project`).className = 'active';
  }, [currentProjectIndex]);

  function setActiveProject(index) {
    if (currentProjectIndex != index) {
      document.getElementById(`${currentProjectIndex}project`).className = '';
      setCurrentProjectIndex(index);
    }
  }

  return (
      <div {...props}>
        <h1>{ messages.projects.title }</h1>

        <div className={styles.content}>
          <nav className={styles.names}>
            {messages.projects.list.map((item, index) => {
              return (
                <button id={`${index}project`} key={index}
                  onClick={() => setActiveProject(index)}
                >
                  {item.title}
                </button>
              );
            })}
          </nav>

          <div id={styles.projectContent}>
            {messages.projects.list[currentProjectIndex].title}
          </div>
        </div>
      </div>
  );
}

export default Knowledge;
