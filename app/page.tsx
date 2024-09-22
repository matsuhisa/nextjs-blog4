import Image from "next/image";
import styles from "./page.module.css";

import ButtonLink from "@/app/_componets/ButtonLink";
import NewsList from "@/app/_componets/NewsList";
// import { News } from "@/app/_libs/microcms";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";



export default async function Home() {
  const title = "Welcome to Next.js!";
  // const sliceData = data.contents.slice(0, 2);
  const data = await getNewsList({ limit: TOP_NEWS_LIMIT });
  return (
    <>
      <NewsList news={data.contents} />
      {/* {sliceData.map((news) => (
        <div key={news.id} className={styles.news}>
          <h2>{news.title}</h2>
          <p>{news.category.name}</p>
          <p>{news.publishedAt}</p>
        </div>
      ))} */}
      <ButtonLink href="/about">About</ButtonLink>
    </>
  );
}
