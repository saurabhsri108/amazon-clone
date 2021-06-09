import React from 'react';
import SliderImages from '../components/SliderImages';
import homecss from '../css/Home.module.css';
import Stores from '../components/Stores';
import UserInfo from '../components/UserInfo';

const Home = () => {
  return (
    <section className={homecss.home} id='#header-top'>
      <div className={homecss.home_container}>
        <SliderImages />
        <UserInfo />
        <Stores />
      </div>
    </section>
  );
};

export default Home;
