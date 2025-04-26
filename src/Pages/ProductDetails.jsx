import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { parseShortDescription } from "../utils/description";
import JacketDetails from "../Components/JacketDetails";
import HoodieDetails from "../Components/HoodieDetails";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const [des, setDes] = useState(null);
  const { id } = useParams();
  const [load, setLoad] = useState(false);

  const {
    products = [],
    loading,
    error,
  } = useSelector((state) => state.product || {});

  const product = products?.find((p) => p.id.toString() === id.toString());

  useEffect(() => {
    if (product?.short_desc) {
      const parsed = parseShortDescription(product.short_desc);
      setDes(parsed);
    }
  }, [product]);
  if (loading)
    return (
      <div className="flex justify-center mt-10">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );

  if (error || !product)
    return (
      <div className="text-red-500 text-center mt-10">Product not found</div>
    );

  // Sample order data (dynamic করতে হলে form বানিয়ে user input নিতে হবে)
  const orderData = {
    product_ids: "1,2",
    s_product_qty: "2,1",
    c_phone: "01734252112",
    c_name: "test",
    courier: "steadfast",
    address: "mirpur 12 ramzanessamarket",
    advance: null,
    cod_amount: "1250",
    discount_amount: null,
    delivery_charge: "80",
  };
  const handleOrderNow = async () => {
    setLoad(true);
    try {
      const response = await axios.post(
        "https://admin.refabry.com/api/public/order/create",
        orderData
      );
      console.log("Order placed successfully:", response.data);
      toast.success("🎉 Order placed successfully!");
    } catch (error) {
      console.error("Failed to place order:", error);
      toast.error("❌ Failed to place order. Please try again.");
    } finally {
      setLoad(false);
    }
  };
  return (
    <div className="hero bg-base-200 py-32">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={`https://admin.refabry.com/storage/product/${product?.image}`}
          className="max-w-sm rounded-lg shadow-2xl"
          alt={product?.name}
        />
        <div className="ml-6">
          <h1 className="text-4xl uppercase font-bold mb-4">{product?.name}</h1>
          <div className="mt-1 font-bold">
            <span className="text-xl font-bold">৳{product?.buying_price}</span>
            {product?.price && (
              <span className="text-red-500 line-through ml-2 text-sm">
                ৳{product?.price}
              </span>
            )}
          </div>
          {des?.type === "jacket" && <JacketDetails data={des} />}
          {des?.type === "hoodie" && <HoodieDetails data={des} />}

          {!des && (
            <p className="text-gray-600 whitespace-pre-line">
              {product?.short_desc}
            </p>
          )}

          <div className="flex justify-between mt-4">
            <Link to="/">
              <button className="btn flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mt-4">
                <FaHome /> Back to home
              </button>
            </Link>
            <button
              onClick={handleOrderNow}
              disabled={loading}
              className="btn  mt-4 flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
            >
              <FaShoppingCart /> Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
