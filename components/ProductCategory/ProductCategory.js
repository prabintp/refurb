import styles from '../Product/product.module.css'
import Image from '../elements/image';


const ProductCategory =({data}) => {
    console.log('heroData',data);
    return(
    <div className="container">
    {
        data.id % 2 ?
        <div className="flex-1 text-lg heroComponent">
          <div className="imgStyle">
              

<Image
        media={data.image.url} 
        className="flex-shrink-0 object-contain w-full md:w-6/12 mt-6 md:mt-0"
      />

          </div>
          <div className="textStyle pl-4">
          <h3 className="font-light text-4xl mb-6">{data.title}</h3>
                 <p className="text-xl ">{data.detail}</p>
                 <a href={'/category/' + data.id} className="mt-4">
               
               <div className="mt-8 btn text-blue-600 with-arrow hover:underline">
               {data.title}
             </div>
             </a>
          </div>
        </div>
        :
        <div className="heroComponent flex-1">
          <div className="textStyle pr-4">
          <h3 className="font-light text-4xl mb-6">{data.title}</h3>
              <p className="text-base text-xl">{data.detail}</p>
              <a href={'/category/' + data.id} className="mt-4">
               
                <div className="mt-8 btn text-blue-600 with-arrow hover:underline">
                {data.title}
              </div>
              </a>
           
          </div>
          <div className="imgStyle">

<Image
        media={data.image.url} 
        className="flex-shrink-0 object-contain w-full md:w-6/12 mt-6 md:mt-0"
      />

              
          </div>
        </div>
    }
     </div>
    )
}

export default ProductCategory;
