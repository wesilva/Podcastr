//Esta arquivo é o principal, ele é chamado toda vez que muda a rota
//Esse app.tsx fica por volta de todas as páginas do app
import '../styles/global.scss'

import Header from '../components/Header'
import Player from '../components/Player';

import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>

  )
}

export default MyApp
