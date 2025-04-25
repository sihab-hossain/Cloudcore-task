import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
    const { id, name, image, price, buying_price, discount } = product || {};
    const savedPrice = price - buying_price;
    const savedPricePercentage = ((savedPrice / price) * 100).toFixed(0);
    
    
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
        <div className="relative">
          <img
           src={`https://admin.refabry.com/storage/product/${image}`}
            alt={name}
            className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {savedPrice && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              {savedPricePercentage}% OFF
            </span>
          )}
        </div>
        <div className="p-4 text-center space-y-2">
          <h3 className="text-lg font-semibold uppercase text-gray-800 truncate">{name}</h3>
          <span className='bg-black text-white px-5 text-sm'>Save TK. {savedPrice}</span>
          <div className="mt-1">
            <span className="text-xl font-bold">৳{buying_price}</span>
            {product?.price && (
              <span className="text-red-600 line-through ml-2">৳{price}</span>
            )}
          </div>
       <Link to={`/product/${product.id}`}>
       <button  className="mt-3 w-full py-2 bg-black text-white text-sm rounded hover:bg-gray-800 transition-colors">
            View Details
          </button>
       </Link>   
        </div>
      </div>
    );
};

export default ProductCard;