import React from 'react';




const Footer = () => {
    return (
      <footer className="bg-stone-800 py-4">
        <div className="container mx-auto md:px-14 text-center md:text-justify">
          <div className="flex flex-col md:flex-row items">
            <div className="w-full mb-4 md:mb-0">
              <img src="/gold.png" alt="logo" className="w-36 mb-5 mx-32 md:mx-0" />
              <div>
                <p className="text-white text-sm">
                  Clean makeup for a healthier, more radiant you.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-right">
              <ul className="flex flex-wrap justify-center md:justify-end mb-24 my-3">
                <li className="mx-2">
                  <a href="/" className="text-white hover:text-red-300">
                    Home
                  </a>
                </li>
                <li className="mx-2">
                  <a href="/products" className="text-white hover:text-red-300">
                    Products
                  </a>
                </li>
                <li className="mx-2">
                  <a href="/signup" className="text-white hover:text-red-300">
                    Signup
                  </a>
                </li>
                <li className="mx-2">
                  <a href="/login" className="text-white hover:text-red-300">
                    Login
                  </a>
                </li>
              </ul>
              <div>
                <p className="text-white text-sm">
                  &copy; {new Date().getFullYear()} Pure Glow. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  

  
  
  export default Footer;
  
