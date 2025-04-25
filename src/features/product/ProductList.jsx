import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './productSlice';
import ProductCard from '../../Components/ProductCard'

const ProductList = () => {
    const dispatch = useDispatch();
    const { products = [], loading, error } = useSelector((state) => state.product || {});
    console.log(products);
    useEffect(() => {
        dispatch(fetchProducts());
    },[dispatch]);
    if (loading) {
        return <div className='flex justify-center  mt-10'><span className="loading loading-bars loading-xl"></span></div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div className="w-10/12 mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array.isArray(products) && products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    );
};

export default ProductList;