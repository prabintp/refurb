import React from 'react';
import {NavLink} from 'reactstrap';
import Image from 'next/image';
import styles from './header.module.css'

const Header = ({data}) => {
  console.log('dataaheader', data);
  return (
<div  className="bg-gray-800" >
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">

              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
              <Image
                        alt='Logo img'
                        src="/refurbLogo.png"
                        width={123}
                        height={45}
                  />

           </div>

           <div className=" sm:block sm:ml-6">
            <div className="flex space-x-4 pt-1">
            {data.map( data => (
            <NavLink href={'/content/' + data.id} className=" text-white px-3 py-2  text-sm font-medium" key={data.id}>
         {data.title}
       </NavLink>
      ))}
            </div>
          </div>

              </div>
             





              <div className="sm:block sm:ml-6">
             
  

              </div>


              </div>
                   
            </div>
    
     
</div>
  );
}


export default Header;