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
          <div className={styles.abstractContainer}>
            <a href="" className={styles.category}>
              科技
            </a>
            <h1>這是我認知的標題</h1>
            <div className={styles.dateContainer}>
              <p className={styles.title}>撰寫日期:</p>
              <p className={styles.dateTime}>{new Date(Date.now()).toLocaleDateString()}</p>
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: `<p>
      This week, Amazon and Microsoft released their earnings reports, and the challenges Amazon faces are quite evident compared to Microsoft. <br><br>
      <b>According to Microsoft's Q3 2023 financial report</b>, the company's revenue, earnings per share, and other metrics exceeded Wall Street expectations. Microsoft Azure's cloud computing business grew by 27%, meeting market expectations. The overall revenue from commercial cloud products, including Azure and some Office productivity tools, increased by 22% year over year to $28.5 billion.<br><br>
      Microsoft is optimistic about Azure's performance in the next quarter, pointing out that a series of AI products recently released have not yet translated into actual revenue. However, they have seen promising initial signs, such as a tenfold increase in Azure OpenAI users this quarter and over 10,000 enterprise and institutional users of the AI programming assistant, Github Copilot.<br><br>
      Meanwhile, Amazon's AWS growth has entered a dangerous zone between 10% and 20%, not far from dropping to single digits. With a new wave of competition in the cloud computing market influenced by AIGC, the future of AWS is worrisome.
    </p>
    <h2>Amazon's Struggles under Andy Jassy</h2>
    <p>
      Two years ago, in February 2021, Jeff Bezos announced his plan to hand over the CEO position to Andy Jassy. At that time, Amazon's quarterly revenue exceeded $100 billion for the first time. Jassy has been with Amazon since 1997 and has led AWS for 15 years. During his tenure, AWS captured about a third of the cloud infrastructure market and became the company's most profitable business.<br><br>
      However, since Jassy took over as CEO in July 2021, Amazon has faced significant challenges. The company's market value has plummeted, dropping below $1 trillion at one point. The decline was due to various factors, including the end of the pandemic's e-commerce boom, rising costs, interest rate hikes by the Federal Reserve, and the worsening economic environment caused by the Russia-Ukraine war.
    </p>
    <h2>Amazon's Efforts to Cut Costs and Boost Growth</h2>
    <p>
      In order to cut costs, Amazon has closed several projects and stores and announced a layoff of 27,000 employees. As for growth, AWS, which Jassy once led to great heights, is showing a dangerous trend of slowing growth. AWS revenue growth declined from 37% and 33% in the first two quarters of 2022 to 27.5% in the third quarter and 20% in the fourth quarter.<br><br>
      Microsoft has managed to gain market share in the cloud sector, while Amazon's share has shrunk. Microsoft's cloud market share rose to 23%, while Amazon's fell to 32%. In response to Microsoft's aggressive pursuit in the cloud computing market with OpenAI and ChatGPT, Amazon has been cautious. In mid-April, Jassy finally introduced Amazon's generative AI tool Amazon Bedrock, Titan base model, and AI programming tool CodeWhisperer.<br><br>
      Jeff Bezos used to end each shareholder letter with the phrase, "Today is still Day One!" meaning that the company should act like a startup. In the current situation, Amazon must find a way to regain its momentum and embrace external trends to continue growing.
    </p>`,
            }}
          />
        </article>
      </section>
      <h3 className={styles.relative__post}>相關貼文</h3>
      <section className={styles.grid}>
        {posts.map((post, index) => (
          <ArticlePost {...post} key={`${post.title}-${index}`} />
        ))}
      </section>
    </section>
  );
};

export default ArticleGrid;
