import React from 'react';
import './cart-button.less';

type TCartButton = {
  count: number;
  disabled?: boolean;
};

export default function CartButton({ count = 0, disabled = false }: TCartButton) {
  const cartButtonTemplate =
    count > 0 ? (
      <div className={`cart-button cart-button_filled ${disabled && 'cart-button_disabled'}`}>
        <button className="cart-button__control">-</button>
        <span className="cart-button__counter">{count}</span>
        <button className="cart-button__control">+</button>
      </div>
    ) : (
      <button className={`cart-button cart-button_empty ${disabled && 'cart-button_disabled'}`}>В Корзину</button>
    );

  return <>{cartButtonTemplate}</>;
}
