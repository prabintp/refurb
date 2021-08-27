import axios from 'axios';
import Image from 'next/image';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Layout from '../../components/Layout';
import styles from './detail.module.css'

export const getStaticPaths = async () => {
    const res = await axios.get(process.env.API_PRODUCTS_URL);
    const products = res.data;
    let arr=[]
    for(let i=0;i<products.length;i++){
      arr.push(products[i]);
    }
    const paths = arr.map(data=>{
        return {
          params: {id:data.id.toString()}
        }
    })
    return{
        paths,
        fallback: false
      }
}

export const getStaticProps = async(context) =>{
  const productId = context.params.id;
  const res = await axios.get(process.env.API_MAIN_URL+'/3');
  const data = res.data.products;
  console.log('000'+data[0].id)
  const resp = await axios.get(process.env.API_MAIN_URL);
  const mainData= resp.data
    for(let i=0;i<data.length;i++){
      const product = data[i]
      if(productId == product.id ){
        return{
          props:{product,mainData}
        }}
    }
}
const Details = ({product,mainData}) => {
  return (
    <div>
        <Header data={mainData} />
          <div className="container mt-8 min-h-screen">
            <h1 className="text-4xl my-8">{product.title}</h1>
            <div className="grid grid-cols-3 gap-4">

            <div >
            <Image
                   alt={product.image.name}
                   src={product.image.formats.small.url}
                  width={400}
                  height={400}
            />
            </div>

            <div className="col-span-2 pr-4">
            <p className={styles.detailPrice}>Price : $ {product.price}</p>
            <p className={styles.description}>{product.description}</p>

            </div>

            </div>
           
           
          </div>
          {mainData[0].components.map( data => (
              (data.__component == "select.footer") ? 
                <Footer data={data} /> 
              : 
              null
          ))}
    </div>
  );

}

export default Details;
