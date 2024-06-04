import React from 'react';
import './operation.sass';
import CartButton from '../CartButton/CartButton';

type TOperation = {
  title: string;
  images: string[];
  description: string;
  cost: string;
  category: string;
};

function Operation({ title, images, description, cost, category }: TOperation) {
  const showcase = images.map((image, index) => {
    return <img className="operation__image" src={image} alt={title} key={`image_${index}`} />;
  });
  return (
    <div className="operation">
      <div className="operation__showcase">{showcase}</div>

      <div className="operation__container">
        <h3 className="operation__title">{title}</h3>
        <h4 className="operation__cost">${cost}</h4>
        <h5 className="operation__category">{category}</h5>

        <p className="operation__description">{description}</p>

        <div className="operation__button">
          <CartButton disabled={true} count={0} />
        </div>
      </div>
    </div>
  );
}

export default Operation;
