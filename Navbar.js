import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-brown-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-bold">Coffee Shop</div>
        <ul className="flex space-x-6 text-white">
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact Us</li>
          <li>Testimonials</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
