import React from 'react';
import './cart-product.less';

type TCartProduct = {
  title: string;
  url: string;
  cost: string;
};

function CartProduct({ title, url, cost }: TCartProduct) {
  return (
    <div className="cart-product">
      <img className="cart-product__image" src={url} alt={title} />

      <div className="cart-product__container">
        <h3 className="cart-product__title">{title}</h3>
        <h4 className="cart-product__cost">${cost}</h4>

        <div className="cart-product__button-container">
          <button className="cart-product__button">Удалить</button>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
