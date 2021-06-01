import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import slidercss from '../../css/home/SliderImages.module.css';
import 'react-alice-carousel/lib/alice-carousel.css';

const SliderImages = () => {
  return (
    <AliceCarousel
      disableDotsControls={true}
      disableButtonsControls={true}
      autoPlay={true}
      autoPlayInterval={2000}
      infinite={true}
    >
      <a href='/'>
        <img
          className={slidercss.prime_image_background}
          src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/SAPF/1500x600_Hero-Tall_P._CB668283308_.jpg'
          alt='Amazon Prime Webshow Image for Image Slider'
        />
      </a>
      <a href='/'>
        <img
          className={slidercss.prime_image_background}
          src='https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB669806110_.jpg'
          alt='Deliver Essentials Only Image for Image Slider'
        />
      </a>
      <a href='/'>
        <img
          className={slidercss.prime_image_background}
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/HPC/GW/Household_1500x600_V2._CB670004437_.jpg'
          alt='Household Items Image for Home Section'
        />
      </a>
      <a href='/'>
        <img
          className={slidercss.prime_image_background}
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/HPC/GW/Grocery_1500x600._CB669573043_.jpg'
          alt='Groceries Image for Home Section'
        />
      </a>
      <a href='/'>
        <img
          className={slidercss.prime_image_background}
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/May21/Covid_Slot/29to5June21/1500x600_PC_Covid_Slot_Pantry._CB667070865_.jpg'
          alt='Covid Slot Image for Home Section'
        />
      </a>
      <a href='/'>
        <img
          className={slidercss.prime_image_background}
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Flip/Essentials_Experience_May21/Revised_EE_Graphics/GW_PC_BUNK_1500x600._CB668893605_.jpg'
          alt='Fashion Essentials Image for Home Section'
        />
      </a>
    </AliceCarousel>
  );
};

export default SliderImages;
