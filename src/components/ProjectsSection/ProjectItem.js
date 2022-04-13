import React from 'react';
import { LangContext } from '../../providers/LangPreference';
import styles from './index.module.scss';
import Image from 'next/image';
import SocialButton from '../SocialButton';
import { FaGithub } from 'react-icons/fa';

function ProjectItem({ textContent, Img, toolsImg, linkRepo, linkProject }) {
    const { messages } = React.useContext(LangContext);

    return (
        <div className={styles.projectItem}>
            <div className={`contentText ${styles.projectText}`}>
                <h2>
                    {textContent.title}
                </h2>
                <p className={'contentText'}>
                    {textContent.description}
                </p>

                <h3>
                    Status:
                    <spam style={{fontSize: '15px', fontWeight: 'normal', marginLeft: '10px'}}>
                        {textContent.status}
                    </spam>
                </h3>

                <div className={styles.projectTools}
                    style={{ display: toolsImg instanceof Array ? '' : 'none'}}
                >
                    <h3>Tools:</h3>
                    <div className={styles.tools}>
                        { toolsImg instanceof Array ?
                            toolsImg.map(item => {
                                return (
                                    <div key={item.alt} className="tooltip">
                                        <Image src={item} placeholder="blur"alt={item.alt} />
                                        {item.alt ? <span className="tooltiptext">{item.alt}</span> : ''}
                                    </div>
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


            <div className={styles.containerButton}>
                {linkProject ? (
                    <SocialButton
                        href={linkProject}
                        bgcolor="#60d9fe"
                    >
                        🚀 &nbsp;{ messages.projects.projectButton }
                    </SocialButton>
                ) : (
                    ''
                )}

                <SocialButton
                    href={linkRepo}
                    bgcolor="#161b22"
                >
                    <FaGithub /> { messages.projects.repositoryButton }
                </SocialButton>
            </div>
        </div>
    )
}

export default ProjectItem;
