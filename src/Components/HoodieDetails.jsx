import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const HoodieDetails = ({data}) => {
    console.log(data);
    return (
        <div className="space-y-2 text-sm text-gray-700">
        <p><strong>Available Colors:</strong> {data.colors.join(", ")}</p>
        <p><strong>Size Info:</strong> {data.sizes}</p>
        <ul className="list-disc list-inside">
          {data.reasonsToLove?.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <h2 className="text-xl font-semibold mb-4">Features:</h2>
      <ul className="space-y-3">
        {data.features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-2 text-gray-700">
            <FaCheckCircle className="text-green-500 mt-1" size={18} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
        <p className="text-blue-600 font-medium">{data.cta}</p>
      </div>
    );
};

export default HoodieDetails;