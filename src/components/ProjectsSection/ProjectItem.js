import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';

function ProjectItem({ textContent, Img, toolsImg }) {


    return (
        <div className={styles.projectItem}>
            <div className={`contentText ${styles.projectText}`}>
                <h2>
                    {textContent.title}
                </h2>
                <p className={'contentText'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor gravida eros eu cursus. Cras efficitur, ligula nec tempor tempus, erat nisl rutrum risus, eu hendrerit arcu tortor in purus.
                </p>

                <h3>
                    Status:
                    <spam style={{fontSize: '15px', fontWeight: 'normal', marginLeft: '10px'}}>
                        {textContent.status}
                    </spam>
                </h3>
                <div className={styles.projectTools}
                    style={{ display: toolsImg ? '' : 'none'}}
                >
                    <h3>Tools:</h3>
                    <div className={styles.tools}>
                        { toolsImg instanceof Array ?
                            toolsImg.map((item, index) => {
                                return (
                                    <Image key={index} src={item} placeholder="blur" alt="Image Project" />
                                );
                            })
                            : ''
                        }
                    </div>
                </div>

            </div>

            <div  className={`contentText ${styles.projectImage}`}>
                { Img ? <Image src={Img} placeholder="blur"  alt="Image Project" /> : '' }
            </div>
        </div>
    )
}

export default ProjectItem;
