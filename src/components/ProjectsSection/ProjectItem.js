import React from 'react';
import styles from './index.module.scss';

function ProjectItem(props) {

    return (
        <div className={styles.projectItem}>
            <div className={`contentText ${styles.projectText}`}>
                <h3>
                    {props.textcontent.title}
                </h3>
                <h4>Status: {props.textcontent.status}</h4>
                <p className={'contentText'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor gravida eros eu cursus. Cras efficitur, ligula nec tempor tempus, erat nisl rutrum risus, eu hendrerit arcu tortor in purus.
                </p>

                <div className={styles.projectTools}>
                    <h4>Tools:</h4>
                </div>

            </div>

            <div className={styles.projectImage}></div>
        </div>
    )
}

export default ProjectItem;
