import React from 'react';
import SliderImages from './SliderImages';
import Products from './Products';

import homecss from '../../css/home/Home.module.css';

const Home = () => {
  return (
    <section className={homecss.home}>
      <div className={homecss.home_container}>
        <SliderImages />
        <Products />
      </div>
    </section>
  );
};

export default Home;
