import styles from './footer.module.css'

const Footer = ({data}) => {

  return (
    <footer className="bg-gray-400 mt-4">
    <div className="relative flex items-center  h-16 container">
    <p className="text-l" >{data.footerText}</p>
      </div>
    
    </footer>
  );
};


export default Footer;