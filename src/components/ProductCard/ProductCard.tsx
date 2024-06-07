import React from 'react';
import './product-card.less';
import CartButton from '../CartButton/CartButton';
import type { Product } from '../ProductList/ProductList'

function ProductCard({ id, title, url, description, cost }: Product) {
  return (
    <div className="product-card">
      <img className="product-card__image" src={url} alt={title} />

      <div className="product-card__container">
        <h3 className="product-card__title">{title}</h3>
        <h4 className="product-card__cost">${cost}</h4>

        <p className="product-card__description">{description}</p>

        <div className="product-card__button">
          <CartButton disabled={true} count={0} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
