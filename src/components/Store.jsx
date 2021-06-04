import React from 'react';
import Button from '@material-ui/core/Button';
import storecss from '../css/Stores.module.css';
import { Link } from 'react-router-dom';

const Store = ({ name, image, buttonText }) => {
  return (
    <Link
      to={`/products/${name.split(' ').join('-').toLowerCase()}`}
      storePoint={`${name.split(' ').join('-').toLowerCase()}`}
    >
      <section className={storecss.store}>
        <div className={storecss.info}>
          <h2 className={storecss.heading}>{name}</h2>
        </div>
        <div className={storecss.img_container}>
          <img src={image} alt={`${name} Image`} />
        </div>
        <div className={storecss.btnadd}>
          <h3>{buttonText}</h3>
        </div>
      </section>
    </Link>
  );
};

export default Store;
