import React from 'react';
import { Link } from 'react-router-dom';

const ProductView = ({ products, cari, onCari }) => {
  return (
    <div>
      {/* Search Input */}
      <label className="input input-bordered flex items-center gap-2 mb-4">
        <input
          type="text"
          className="grow cari"
          placeholder="Search"
          value={cari} // Bind input value to search query
          onChange={(e) => onCari(e.target.value)} // Update search query on change
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      {/* Product List */}
      <div className='product-list grid grid-cols-3 gap-4'>
        {products.map(product => (
          <div key={product.id} className='card bg-base-100 w-96 shadow-xl'>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductView;
