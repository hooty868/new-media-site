import React, { FC } from 'react';
import Image from 'next/image';

import styles from './AsidePost.module.scss';

type article = {
  src: string;
  dateTime: string;
  title: string;
  category: string;
  abstract: string;
};

type ArticleGridProps = { posts: article[] };

const RelatedPost: FC<article> = ({ src = '', category = '', dateTime = '', title = '', abstract = '' }) => {
  return (
    <article className={styles.relatedPost}>
      <Image src={src} width={70} height={60} style={{ objectFit: 'contain' }} alt="RELATED POST" />
      <div className={styles.titleContainer}>
        <h4>{title}</h4>
        <p className={styles.dateTime}>{dateTime}</p>
      </div>
    </article>
  );
};

const AsidePost: FC<ArticleGridProps> = ({ posts }) => {
  return (
    <aside className={styles.aside}>
      <h4>熱門貼文</h4>
      <div className={styles.popularPost}>
        <div className={styles.imageContainer}>
          <Image src={posts[0].src} priority={true} fill style={{ objectFit: 'contain' }} alt="POPULAR POST" />
        </div>
        <div className={styles.titleContainer}>
          <p className={styles.dateTime}>{posts[0].dateTime}</p>
          <p className={styles.title}>{posts[0].title}</p>
        </div>
      </div>
      <h4 className={styles.sectionTitle}>最近貼文</h4>
      <div className={styles.relatedPosts}>
        {posts.map((post, index) => (
          <RelatedPost {...post} key={`${post.title}-${index}`} />
        ))}
      </div>
    </aside>
  );
};

export default AsidePost;
