import Layout from '../components/layout'
import '../styles/reset.scss'
import '../styles/global.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}