import React, { FC } from 'react';

import styles from './Footer.module.scss';

type FooterProps = {};

const Footer: FC<FooterProps> = () => {
  return (
    <footer className={styles.container}>
      <p>Copyright ©2023</p>
      <div className={styles.linkContainer}>
        <a>服務條款</a>
        <a>DMCA</a>
        <a href="https://www.gmbook.tw">聯絡我們</a>
      </div>
    </footer>
  );
};

export default Footer;
