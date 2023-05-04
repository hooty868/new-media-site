import React, { FC } from 'react';
import styles from './HomePersonalTopHeader.module.scss';

type HomePersonalTopHeaderProps = {};

const HomePersonalTopHeader: FC<HomePersonalTopHeaderProps> = () => {
  return (
    <header className={styles.navBar}>
      <p className={styles.logo}>GM BOOK</p>
      <ul>
        <li className={styles.tab}>
          <p>文章</p>
        </li>
        <li className={styles.tab}>
          <p>關於我</p>
        </li>
      </ul>
    </header>
  );
};

export default HomePersonalTopHeader;
