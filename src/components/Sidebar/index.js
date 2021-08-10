import styles from './index.module.scss'; 
import ToggleLang from '../ToggleLang';
import ToggleTheme from '../ToggleTheme';
import SocialButton from '../SocialButton';
import { FaInstagram, FaLinkedinIn, FaGithub, FaDiscord } from 'react-icons/fa';


function Sidebar(props) {
    return (
      <div {...props}>
        <nav className={styles.nav}>
          <ToggleTheme />

          <ToggleLang />
        </nav>

        <div className={styles.socialButtons}>
          <SocialButton
            href="https://www.instagram.com/pedrosa_lucas/"
            bgColor="#9d5dac"
          >
            <FaInstagram /> Instagram
          </SocialButton>

          <SocialButton
            href="https://www.linkedin.com/in/lucas-pedrosa-vieira-lima/"
            bgColor="#0a66c2"
          >
            <FaLinkedinIn /> LinkedIn
          </SocialButton>

          <SocialButton
            href="https://github.com/pedrosalucas"
            bgColor="#161b22"
          >
            <FaGithub /> Github
          </SocialButton>

          <SocialButton
            href="https://discordapp.com/users/xalabum#7443/"
            bgColor="#5865f2"
          >
            <FaDiscord /> Discord
          </SocialButton>
        </div>
      </div>
    );
}

export default Sidebar;
