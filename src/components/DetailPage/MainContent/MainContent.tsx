import React, { FC } from 'react';
import useMediaQuery from 'hooks/useMediaQuery';

import styles from './MainContent.module.scss';
import ArticleGrid from './ArticleGrid/ArticleGrid';
import AsidePost from './AsidePost/AsidePost';

const posts = [
  {
    src: 'https://aticle-image-gmbook.sgp1.digitaloceanspaces.com/test2.jpeg',
    dateTime: 'MAR 22, 2021',
    title: '如何在緩慢的經濟中保持生活方式',
    category: '生活方式技術',
    abstract:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut, neque odio possimus repellendus tenetur? .',
  },
  {
    src: 'https://aticle-image-gmbook.sgp1.digitaloceanspaces.com/test2.jpeg',
    dateTime: 'MAR 22, 2021',
    title: 'How To Life Style In A Slow Economy',
    category: 'Life Style Technology',
    abstract:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut, neque odio possimus repellendus tenetur? .',
  },
  {
    src: 'https://aticle-image-gmbook.sgp1.digitaloceanspaces.com/test2.jpeg',
    dateTime: 'MAR 22, 2021',
    title: '如何在緩慢的經濟中保持生活方式，如何在緩慢的經濟中保持生活方式？',
    category: 'Life Style Technology',
    abstract:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut, neque odio possimus repellendus tenetur? .',
  },
  {
    src: 'https://aticle-image-gmbook.sgp1.digitaloceanspaces.com/test2.jpeg',
    dateTime: 'MAR 22, 2021',
    title: 'How To Life Style In A Slow Economy',
    category: 'Life Style Technology',
    abstract:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut, neque odio possimus repellendus tenetur? .',
  },
  {
    src: 'https://aticle-image-gmbook.sgp1.digitaloceanspaces.com/test2.jpeg',
    dateTime: 'MAR 22, 2021',
    title: '如何在緩慢的經濟中保持生活方式',
    category: 'Life Style Technology',
    abstract:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut, neque odio possimus repellendus tenetur? .',
  },
  {
    src: 'https://aticle-image-gmbook.sgp1.digitaloceanspaces.com/test2.jpeg',
    dateTime: 'MAR 22, 2021',
    title: '如何在緩慢的經濟中保持生活方式',
    category: 'Life Style Technology',
    abstract:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut, neque odio possimus repellendus tenetur? .',
  },
];

type MainContentProps = {};

const MainContent: FC<MainContentProps> = () => {
  const isMobile = useMediaQuery(`(max-width: 1024px)`);

  return (
    <section className={styles.container}>
      <ArticleGrid posts={posts} />
      <AsidePost posts={posts} />
    </section>
  );
};

export default MainContent;
