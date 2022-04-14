import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { FaTrash } from "react-icons/fa";
import axios from "axios";

interface CardProps extends Product {
  deleteProduct: (id: any) => void;
}

export default function ProductCard({
  avatar,
  name,
  price,
  id,
  deleteProduct,
}: CardProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="h-50 relative grid lg:col-span-1 md:col-span-2 xs:col-span-4 lg:m-5 m-5 sm:m-0 justify-center product-card-wrapper ">
      <div
        className="rounded card-top flex justify-center"
        onClick={() => navigate(`/product/${id}`)}
      >
        <div className="bg-white flex justify-center rounded-3xl card-image">
          <img
            className="w-50 p-5 object-contain product-image-card"
            src={avatar}
            alt="product"
          />
        </div>
        <div className="px-3 py-2">
          <p className="font-bold text-xl mb-2 product-title">{name}</p>
          <p className="text-gray-700 text-base">$ {price}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="text-red font-bold "
          onClick={() => deleteProduct(id)}
        >
          <FaTrash className="text-red-600" />
        </button>
      </div>
    </div>
  );
}
