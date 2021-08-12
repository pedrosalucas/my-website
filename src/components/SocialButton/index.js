import styles from './index.module.scss';

const SocialButton = (props) => {
    return (
        <a target="_blank" className={styles.button} style={{backgroundColor: props.bgcolor}} {...props}>
            {props.children}
            <spam>
                {props.textContent}
            </spam>
        </a>
    )
}

export default SocialButton;