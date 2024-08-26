import React from 'react';
import chocolateImg from './img/chocolate.jpg'; // Correct path and import
import biscuitsImg from './img/biscuits.jpg'; // Correct path and import
import chocolateCakeImg from './img/chocolate_cake.jpg';
function Products() {
    return (
      <div>
        <img src={chocolateImg} alt="Chocolate" />
        <img src={biscuitsImg} alt="Biscuits" />
        <img src={chocolateCakeImg} alt="Chocolate Cake" />
        {/* Other code */}
      </div>
    );
  }
  export default Products;
  