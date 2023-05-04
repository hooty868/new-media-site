import React, { FC } from 'react';
import Image from 'next/image';

import styles from './ArticleGrid.module.scss';

type article = {
  src: string;
  dateTime: string;
  title: string;
  category: string;
  abstract: string;
};

type ArticleGridProps = { posts: article[] };

const ArticlePost: FC<article> = ({ src = '', category = '', dateTime = '', title = '', abstract = '' }) => {
  return (
    <article className={styles.gridPost}>
      <Image src={src} priority={true} fill alt="Example image" />
      <div className={styles.postContainer}>
        <div className={styles.subTitleContainer}>
          <p className={styles.category}>{category}</p>
          <p className={styles.dateTime}>{dateTime}</p>
        </div>
        <h2>{title}</h2>
        <a className={styles.continue}>CONTINUE READING</a>
      </div>
    </article>
  );
};

const ArticleGrid: FC<ArticleGridProps> = ({ posts }) => {
  return (
    <section className={styles.gridContent}>
      <section className={styles.content}>
        <article className={styles.article} style={{ width: '100%' }}>
          <Image src={posts[0].src} priority={true} fill alt="Example image" />
          <div className={styles.titleContainer}>
            <div className={styles.subTitleContainer}>
              <p className={styles.category}>{posts[0].category}</p>
              <p className={styles.dateTime}>{posts[0].dateTime}</p>
            </div>
            <h2 className={styles.title}>{posts[0].title}</h2>
            <p className={styles.abstract}>{posts[0].abstract}</p>
            <a className={styles.continue}>CONTINUE READING</a>
          </div>
        </article>
      </section>
      <section className={styles.grid}>
        {posts.map((post, index) => (
          <ArticlePost {...post} key={`${post.title}-${index}`} />
        ))}
      </section>
    </section>
  );
};

export default ArticleGrid;
