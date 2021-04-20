//Esta arquivo é o principal, ele é chamado toda vez que muda a rota
//Esse app.tsx fica por volta de todas as páginas do app
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
