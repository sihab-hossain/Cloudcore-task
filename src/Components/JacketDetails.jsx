import React from 'react';

const JacketDetails = ({data}) => {
    return (
        <div className="space-y-2 text-sm text-gray-700">
        <p><strong>Fabric:</strong> {data.fabric}</p>
        <p><strong>Swing:</strong> {data.swing}</p>
        <p><strong>Zipper:</strong> {data.zipper}</p>
        <p><strong>Padding:</strong> {data.padding}</p>
        <p><strong>Address:</strong> {data.location}</p>

        <div>
          <strong>Size chart - In inches:</strong>
          <ul className="list-disc list-inside">
          <table className="table-auto w-full text-left border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">Size</th>
            <th className="px-4 py-2 border">Chest</th>
            <th className="px-4 py-2 border">Length</th>
          </tr>
        </thead>
        <tbody>
          {data.sizes.map((size, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{size.label}</td>
              <td className="px-4 py-2 border">{size.chest}</td>
              <td className="px-4 py-2 border">{size.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
          </ul>
        </div>
  
        <p className="text-green-600 font-medium">{data.deliveryNote}</p>
      </div>
    );
};

export default JacketDetails;