import Image from "next/image";
import styles from "./page.module.css";

type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};

const data: { contents: News[] } = {
  contents: [
    {
      id: "1",
      title: "渋谷に新しいカフェがオープンしました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2022-01-01T00:00:00.000Z",
      createdAt: "2022-01-01T00:00:00.000Z",
    },
    {
      id: "2",
      title: "当社CEOが業界リーダーTOP30に選出されました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2022-01-02T00:00:00.000Z",
      createdAt: "2022-01-02T00:00:00.000Z",
    },
    {
      id: "3",
      title: "テストの記事です",
      category: {
        name: "更新情報",
      },
      publishedAt: "2022-01-03T00:00:00.000Z",
      createdAt: "2022-01-03T00:00:00.000Z",
    },
  ],
};

export default function Home() {
  const title = "Welcome to Next.js!";
  const sliceData = data.contents.slice(0, 2);
  return (
    <>
      {sliceData.map((news) => (
        <div key={news.id} className={styles.news}>
          <h2>{news.title}</h2>
          <p>{news.category.name}</p>
          <p>{news.publishedAt}</p>
        </div>
      ))}
      <section>
        <Image src="/img-mv.jpg" alt="" width={4000} height={1200} />
      </section>
    </>
  );
}
