import Layout from '../components/Layout'
import '../styles/globals.css'
// import {ToastContainer} from 'reac'
function MyApp({ Component, pageProps }) {
  return (
    <Layout >
      {/* <ToastContainer position='top-center' /> / */}
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
