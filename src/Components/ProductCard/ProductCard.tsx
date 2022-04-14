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
    <div className="relative justify-center product-card-wrapper bg-white rounded product-card-wrapper">
      <div
        className="card-top flex justify-center"
        onClick={() => navigate(`/product/${id}`)}
      >
        <div className="flex justify-center card-image">
          <img
            className="w-auto p-5 object-contain product-image-card"
            src={avatar}
            alt="product"
          />
        </div>
        <div className="px-3 py-2 absolute bottom-0">
          <p className="font-bold text-xl mb-2 product-title">{name}</p>
          <p className="text-gray-700 text-base">$ {price}</p>
        </div>
      </div>
      <div className="flex justify-center absolute top-3 right-3">
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
