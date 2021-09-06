import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import SocialButton from '../SocialButton';
import { FaGithub } from 'react-icons/fa';

function ProjectItem({ textContent, Img, toolsImg, linkRepo, tilteRepo }) {


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

            <SocialButton
                href={linkRepo}
                bgcolor="#161b22"
                style={{ backgroundColor: "#161b22", width: "300px",marginTop: "35px", fontSize: "24px" }}
            >
                <FaGithub /> { tilteRepo }
            </SocialButton>
        </div>
    )
}

export default ProjectItem;
