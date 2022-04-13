import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProductCard from "../Components/ProductCard/ProductCard";

export default function Home(): JSX.Element {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [categories, setCategories] = useState<Array<Category>>([]);
  const [filtredProducts, setFiltredProducts] = useState<Array<Product>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const getProducts = () => {
    setIsLoading(true);
    axios
      .get("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/")
      .then((res) => {
        setProducts(res.data);
        setFiltredProducts(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const getCategories = () => {
    axios
      .get("https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/")
      .then((res) => {
        setCategories(res.data);
      });
  };
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const onCategoryChange = (e: any) => {
    const filtredProducts = products.filter(
      (product) => product.category === e.target.value
    );
    if (e.target.value === "all") {
      setFiltredProducts(products);
    } else {
      setFiltredProducts(filtredProducts);
    }
  };
  return (
    <div>
      {isLoading ? (
        <div className="flex items-center justify-center text-2xl mt-5">
          Loading...
        </div>
      ) : (
        <div className="mt-10">
          <div className="flex items-center justify-between bg-transparent px-8 pt-6 pb-8 mb-4">
            <input
              className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />

            <div className="relative">
              <select
                className="capitalize block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={onCategoryChange}
              >
                <option value="" disabled selected>
                  Categories
                </option>
                <option value="all">All</option>

                {categories.map((category) => (
                  <option className="capitalize" value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-4 gap-4">
              {filtredProducts.map((product: any) => (
                <ProductCard key={product.id} {...product} />
              ))}
              {!filtredProducts.length && <h2>No Products Available</h2>}
            </div>
          </div>
        </div>
      )}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full text-3xl"
        onClick={() => navigate("/product/new")}
      >
        +
      </button>
    </div>
  );
}
