import React from 'react';
import { Camera, Mail, Phone, Twitter, Facebook, Linkedin } from 'lucide-react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-black text-white py-8 px-2">
      <div className="container mx-auto flex flex-wrap justify-center"> {/* Center content on all screens */}
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
          <h3 className="text-white font-medium mb-2">About Us</h3>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.
          </p>
          <div className="flex justify-between mt-4">
            <a href="mailto:youremail@example.com" className="text-white hover:underline ">
              <Mail color="white" size={10} /> youremail@example.com
            </a>
            <a href="tel:+1234567890" className="text-white hover:underline">
              <Phone color="white" size={10} /> +123 456 7890
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 md:mb-0">
          <h3 className="text-center text-white font-medium mb-2">Quick Links</h3>
          <ul className="list-none space-y-2 text-gray-300 text-center"> {/* Center text for links on mobile */}
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
          <h3 className="text-white font-medium mb-2">Follow Us</h3>
          <p className="text-gray-300">Stay updated with our latest products and offers</p>
          <div className="flex gap-4 mt-2 justify-center"> {/* Center social icons on mobile */}
            <a href="#" className="text-white hover:text-gray-400">
              <Twitter color="white" size={18} />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <Facebook color="white" size={18} />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <Linkedin color="white" size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center py-2 border-t border-gray-700 mt-8">
        <p className="text-gray-300">Copyright &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
