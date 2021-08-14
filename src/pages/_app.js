import '../styles/globals.css';
import { LangPreference } from '../providers/LangPreference';
import { ThemePreference } from '../providers/ThemePreference';
import { UserTimeZone } from '../providers/UserTimeZone';

function MyApp({ Component, pageProps }) {
  return (
    <UserTimeZone>
    <ThemePreference>
      <LangPreference>
        <Component {...pageProps} />
      </LangPreference>
    </ThemePreference>
    </UserTimeZone>
  );
}

export default MyApp
