import React from 'react';
import MainPage from '@/assets/images/mainimg.png';
import Slider from '@/components/Slider';
import styles from './Main.scss';
import Features from '@/components/Features';
import Audience from '@/components/Audience';

const Main = (): JSX.Element => {
 return (
   <div className="bg-light theme-container position-relative">
      <div className="d-flex justify-content-center w-20 theme-main">
        <img src={MainPage} className={styles['main__image']} alt="mainImg"/>
        <div className={styles['main__title']}>Your pocket cookbook</div>
      </div>
      <Features/>
      {/* <Slider /> */}
      <Audience />
  </div>
  )
}

export default Main;
