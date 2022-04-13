import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails(): JSX.Element {
  const params = useParams();
  const [product, setProduct] = useState<Product>({});

  const getProduct = () => {
    axios
      .get(
        `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${params.id}`
      )
      .then((res) => {
        setProduct(res.data);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="flex justify-center">
      <div>
        <div className="flex">
          <img
            src={product?.avatar}
            alt="alternate text"
            className="product-image"
          />
          <div className="flex justify-center flex-col ml-10">
            <h2>{product.name}</h2>
            <h2>{product.price}</h2>
          </div>
        </div>
        <hr />
        <p>{product.description}</p>
      </div>
    </div>
  );
}
