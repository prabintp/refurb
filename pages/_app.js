import '../styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

// function MyApp({ Component, pageProps }) {
//   return <Layout  pageTitle="ShopSite" >
//     <Header />
//         <Component {...pageProps} />
//     <Footer />
//   </Layout>
// }
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
export default MyApp
