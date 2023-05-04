import React, { FC } from 'react';
import styles from './DetailPage.module.scss';
import MainContent from 'components/DetailPage/MainContent/MainContent';

type HomePageProps = {};

const HomePage: FC<HomePageProps> = () => {
  return (
    <main id="homepage-personal" className={styles.container}>
      <div className={styles.mainContent}>
        <MainContent />
      </div>
      {/* <Subscribe boxed={false} /> */}
    </main>
  );
};

export default HomePage;
