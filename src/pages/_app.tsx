//Esta arquivo é o principal, ele é chamado toda vez que muda a rota
//Esse app.tsx fica por volta de todas as páginas do app
import '../styles/global.scss'

import Header from '../components/Header'
import Player from '../components/Player';

import styles from '../styles/app.module.scss';
import { PlayerContextProvider } from '../contexts/PlayerContext';


function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvider>
  )
}

export default MyApp
