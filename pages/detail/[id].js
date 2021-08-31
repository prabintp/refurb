import axios from 'axios';
import Image from 'next/image';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Layout from '../../components/Layout';
import styles from './detail.module.css'
import { Container, Row, Col } from 'reactstrap';

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
  const resp = await axios.get(process.env.API_MAIN_URL);
  const mainData= resp.data
  const res1 = await axios.get(process.env.API_PRODUCTS_URL);
  const productData= res1.data

    for(let i=0;i<data.length;i++){
      const product = data[i]
      if(productId == product.id ){
        return{
          props:{product,mainData,productData}
        }}
    }
}
const Details = ({product,mainData,productData}) => {
  let products = [];
  for(let i=0;i<productData.length;i++){
    const data = productData[i]
    if(product.title == data.title ){
        products.push(data)
  }}
  return (
    <div>
        <Header data={mainData} />
          <div className="container mt-8">
            <h1 className="text-4xl my-8">{product.title}</h1>
            <div className="grid grid-cols-3 gap-4">

            <div >
            <Image
                  alt={product.image.name}
                  src={product.image.formats.medium.url}
                  width={400}
                  height={450}
            />
            </div>

            <div className="col-span-2 pr-4">
           

            <p className={styles.detailPrice}>Price : Rs. {product.price}</p>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.contactDetails}>Contact Details of Seller</p>
            <div className={styles.contactDiv}>
              <p className={styles.addressLabel}>Address:</p>
              <p className={styles.address}>{product.address}</p>
            </div>
            <div className={styles.contactDiv}>
              <p className={styles.phoneNoLabel}>Phone No:</p>
              <p className={styles.phoneNo}>{product.phoneNo}</p>
            </div>

            </div>

            </div>
           
           
           
            
          </div>
          <div className="container mt-8">
              <h3 className="text-2xl py-4">Similar Products</h3>
              <div>
                <Container fluid>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                    <Row>    
                    {products[0].product.map(product=>(
                        <Col key={product.id} md={4} lg={3}>
                            <div className={styles.card} >
                              <a  href={'/detail/' + product.id} className={styles.cardLink} >
                            <h1 className={styles.cardText}>{product.title}</h1>
                            <Image
                                alt={product.image.name}
                                src={product.image.formats.small.url}
                                width={130}
                                height={150}
                            />
                              <p className={styles.cardSubtext}>Price: Rs. {product.price}</p>
                              </a>
                            </div>
                        </Col>
                        ))}
                    </Row>
                    </Col>
                  </Row>
                </Container>
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
