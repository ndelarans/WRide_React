import { FaTwitter, FaInstagram } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-6 text-white text-center">
      <div className="container mx-auto">
        <p className="text-sm mb-4">© 2024 Wride. Todos los derechos reservados.</p>
        <div className="flex justify-center mb-4">
          <a 
            href="https://twitter.com/tuusuario" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mx-2"
            aria-label="Twitter"
          >
            <FaTwitter className="text-gray-400 text-xl hover:text-blue-500 transition-colors" />
          </a>
          <a 
            href="https://instagram.com/tuusuario" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mx-2"
            aria-label="Instagram"
          >
            <FaInstagram className="text-gray-400 text-xl hover:text-pink-500 transition-colors" />
          </a>
        </div>
        <p className="text-sm">Razón Social: Wride S.A. de C.V.</p>
      </div>
    </footer>
  );
};

export default Footer;
