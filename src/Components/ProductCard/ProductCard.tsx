import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({
  avatar,
  name,
  price,
  id,
}: Product): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="h-50" onClick={() => navigate(`/product/${id}`)}>
      <div className="max-w-sm rounded overflow-hidden">
        <div className="bg-white flex justify-center">
          <img
            className="w-50 p-5 object-contain product-image"
            src={avatar}
            alt="product"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">$ {price}</p>
        </div>
      </div>
    </div>
  );
}
