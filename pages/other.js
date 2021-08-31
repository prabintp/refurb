import React from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CarouselComponent from '../components/Carousel/CarouselComponent';
import ProductCategory from '../components/ProductCategory/ProductCategory';

export default function Other({aboutData,mainData,data}) {
    if(aboutData != undefined && mainData != undefined && data!=undefined){
        
        return (
            <Layout pageTitle="ShopSite">
                <Header data={mainData} />
            <div className="container">
                
                {aboutData.map( data => (
                    (data.__component == "select.rich-text") ? 
                    <div>
                        {data.image ? 
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
                                width={200}
                                height={250}
                                />
                            </div>
                        </div>
                        :
                        <div>
                            <p className="subHeader">{data.heading}</p>
                            <h3>{data.subHeading}</h3>
                            <p className="desp">{data.description}</p>
                        </div>
                        }
                    </div>
                    : 
                    null
                 ))}
                 {aboutData.map( data => (
                    (data.__component == "select.carousel") ? 
                    <CarouselComponent data={data} />
                    : 
                    null
                 ))}
                   {aboutData.map( data => (
                    (data.__component == "select.categories") ? 
                        <ProductCategory data={data} />
                    : 
                    null
                 ))}
                 </div>
                {aboutData.map( data => (
                    (data.__component == "select.footer") ? 
                        <Footer data={data} /> 
                    : 
                    null
                 ))}
               
               
            </Layout>
        
        )
    }
    return(
        null
    )

}
