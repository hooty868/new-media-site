import React, { FC } from 'react';
import useMediaQuery from 'hooks/useMediaQuery';
import Image from 'next/image';
import styles from './PostGroupWithPrimary.module.scss';

type PostGroupWithPrimaryProps = {};

const PostGroupWithPrimary: FC<PostGroupWithPrimaryProps> = () => {
  const posts = [
    {
      src: 'https://aticle-image-gmbook.sgp1.digitaloceanspaces.com/test2.jpeg',
      dateTime: 'MAR 22, 2021',
      title: 'How To Life Style In A Slow Economy',
    },
    {
      src: 'https://aticle-image-gmbook.sgp1.digitaloceanspaces.com/test2.jpeg',
      dateTime: 'MAR 22, 2021',
      title: '如何在緩慢的經濟中保持生活方式',
    },
    {
      src: 'https://aticle-image-gmbook.sgp1.digitaloceanspaces.com/test2.jpeg',
      dateTime: 'MAR 22, 2021',
      title: 'How To Life Style In A Slow Economy',
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.posts}>
        {posts.map((post, index) => {
          return (
            <div className={styles.post} key={`${post.title}-${index}`}>
              <Image src={post.src} width={350} height={200} alt="Example image" />
              <div className={styles.titleContainer}>
                <p className={styles.dateTime}>{post.dateTime}</p>
                <p className={styles.title}>{post.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PostGroupWithPrimary;
