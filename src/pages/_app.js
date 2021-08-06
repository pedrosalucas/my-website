import '../styles/globals.css';
import { LangPreference } from '../providers/LangPreference';
import { ThemePreference } from '../providers/ThemePreference';

function MyApp({ Component, pageProps }) {
  return (
    <ThemePreference>
      <LangPreference>
        <Component {...pageProps} />
      </LangPreference>
    </ThemePreference>
  );
}

export default MyApp
