import React from 'react';
import SliderImages from './SliderImages';
import homecss from '../css/Home.module.css';
import Stores from './Stores';
import UserInfo from './UserInfo';

const Home = () => {
  return (
    <section className={homecss.home}>
      <div className={homecss.home_container}>
        <SliderImages />
        <UserInfo />
        <Stores />
      </div>
    </section>
  );
};

export default Home;
