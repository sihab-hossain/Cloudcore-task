import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {id} = useParams();
    console.log(id);
    const {products = [], loading, error } = useSelector((state) => state.product || {});   
    const product = products?.find((p) => p.id.toString() === id.toString());
    console.log(product);
    if (loading) return <div className='flex justify-center  mt-10'><span className="loading loading-bars loading-xl"></span></div>;
    ;
    if (error) return console.log('product not found');;    
    return (
        <div>
            
        </div>
    );
};

export default ProductDetails;