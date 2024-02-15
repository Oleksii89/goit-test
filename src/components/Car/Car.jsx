import React from 'react';

import css from './Car.module.css';
import { ReactComponent as IconHeart } from '../../../assets/heart.svg';

export const Car = ({ year, make, model, price, favourite, img, id }) => {
  return (
    <li>
      <div>
        <img className={css.img} src={img} alt={model} />
        <button>
          <IconHeart
            className={`${css.IconHeart} ${css.favourite ? css.favourite : ''}`}
          />
        </button>
      </div>
      <p>
        <b>{make}</b>
      </p>
      <p>
        <b>{model}</b>,
      </p>
      <p>
        <b>{year}</b>
      </p>
      <p>
        <b>{price}</b>
      </p>
    </li>
  );
};
