import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -m-6">
          <div className="w-full p-6 lg:w-1/2">
            <div className="flex items-center mb-4">
              <Logo width="100px" />
            </div>
            <p className="text-sm text-gray-200">
              &copy; Copyright 2023. All Rights Reserved by DevUI.
            </p>
          </div>
          <div className="w-full p-6 lg:w-1/2">
            <div className="mb-4">
              <h3 className="text-xs font-semibold uppercase text-gray-200 mb-2">Contact Us</h3>
              <ul>
                <li className="mb-2 flex items-center">
                  <FaInstagram className="mr-2 text-pink-200" />
                  <a
                    href="https://www.instagram.com/_sprihaaaaa_/"
                    className="text-base font-medium text-gray-300 hover:text-gray-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
