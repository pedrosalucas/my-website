import styles from './index.module.scss';

const SocialButton = (props) => {
    return (
        <a target="_blank" className={styles.button} style={{backgroundColor: props.bgcolor}} {...props}>
            {props.children}
        </a>
    )
}

export default SocialButton;
