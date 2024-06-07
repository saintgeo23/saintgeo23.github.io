import React, { useState, useRef, useEffect } from "react";

import ProductCard from '../ProductCard/ProductCard';
import './product-list.less';

export type Product = {
  id: string;
  title: string;
  url: string;
  cost: string;
  description?: string;
}

interface ProductListProps {
  /**
   * Initial products list
   */
  initialProducts?: Product[];
}

export default function ProductList({ initialProducts }: ProductListProps) {
  const [products, setProducts] = useState([...(initialProducts || [])] as Product[]);
  const [observer, setObserver] = useState(null);
  const intersectorRef = useRef(null);

  function createRandomProduct (): Product {
    const randomNumber = Math.random();
    const cost = `${Math.floor(randomNumber * 10000) + 1}`;
    const id = `${randomNumber}`;

    return {
      id,
      cost,
      title: `New product ${id}`,
      url: `https://source.unsplash.com/random/200x200?sig=${id}`,
      description: `New product description ${id}`,
    };
  }

  function addNextProducts(): void {
    const nextProducts = [] as Product[];

    for (let i = 0; i < 10; i += 1) {
      nextProducts.push(createRandomProduct());
    }

    setProducts((products) => [...products, ...nextProducts]);
  }

  function createObserver(): void {
    if (!intersectorRef?.current) return;

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    const newObserver = new IntersectionObserver(addNextProducts, options);
    newObserver.observe(intersectorRef.current);

    setObserver(newObserver);
  }

  useEffect(() => {
    addNextProducts();
    createObserver();

    return () => { if (observer) observer.disconnect()};
  }, [])

  return (
    <div className='product-list'>
      <ul className="product-list__container">
        {products.map((product) => {
          return (
            <li className='product-list__item' key={product.id}>
              <ProductCard {...product} />
            </li>
          )
        })}
      </ul>

      <span
        className="product-list__intersector"
        ref={intersectorRef}
      />
    </div>
  );
}
