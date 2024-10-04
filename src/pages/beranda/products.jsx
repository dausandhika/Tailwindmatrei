import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductView from './ProductView'; // Make sure this path is correct

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cari, setCari] = useState(''); // State for search query

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleCari = (query) => {
    setCari(query);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(cari.toLowerCase())
  );

  return (
    <ProductView 
      products={filteredProducts} 
      cari={cari} 
      onCari={handleCari} 
    />
  );
};

export default Products;
