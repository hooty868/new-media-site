import React, { FC } from 'react';

import styles from './Homepage.module.scss';
import PostGroupWithPrimary from 'components/Homepage/PostGroupWithPrimary/PostGroupWithPrimary';
import MainContent from 'components/Homepage/MainContent/MainContent';

type HomePageProps = {};

const HomePage: FC<HomePageProps> = () => {
  return (
    <main id="homepage-personal" className={styles.container}>
      <div className={styles.mainContent}>
        <PostGroupWithPrimary />
        <MainContent />
      </div>
      {/* <Subscribe boxed={false} /> */}
    </main>
  );
};

export default HomePage;
