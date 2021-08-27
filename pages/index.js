import React from 'react';
import axios from 'axios';
import ProductCategory from '../components/ProductCategory/ProductCategory';
import CarouselComponent from '../components/Carousel/CarouselComponent';
import Layout from '../components/Layout';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Image from 'next/image';

const Home = ({homeData,mainData}) => {
  return (
    <Layout pageTitle="ShopSite">
        <Header data={mainData} />
      <div>
      {homeData.map( data => (
         (data.__component == "select.carousel") ? 
         <CarouselComponent data={data} />
         : 
          null
      ))}
       {homeData.map( data => (
         (data.__component == "select.categories") ?
         <ProductCategory data={data}  />
         :
         null
       ))}
       {homeData.map( data => (
          (data.__component == "select.rich-text") ? 
            <div className="textDiv">
              <div className="textSide">
                <p className="subHeader">{data.heading}</p>
                <h3>{data.subHeading}</h3>
                <p className="desp">{data.description}</p>
              </div>
              <div className="imgSide">
                <Image
                  alt={data.image.name}
                  src={data.image.formats.small.url}
                  width={50}
                  height={70}
                  />
              </div>
            </div>
                : 
              null
        ))}
         
     </div>
      {homeData.map( data => (
          (data.__component == "select.footer") ? 
              <Footer data={data} /> 
                : 
              null
      ))}
    </Layout>
   );
}
export default Home;
export async function getStaticProps(){
    const res = await axios.get(process.env.API_MAIN_URL || 'https://pure-dawn-42818.herokuapp.com');
    const mainData = res.data;
    const resp = await axios.get(process.env.API_HOME_URL || 'https://pure-dawn-42818.herokuapp.com');
    const homeData = resp.data.components;
   return {  
      props:{
        mainData,homeData
      }
    };
  }