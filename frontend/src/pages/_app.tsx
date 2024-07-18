import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"; 
config.autoAddCss = false;

import 'tailwindcss/tailwind.css'
import { AppProvider } from '../data/context/AppContext';

export default function App({ Component, pageProps }) {
  return <AppProvider>
    <Component {...pageProps} />
  </AppProvider>;
}
