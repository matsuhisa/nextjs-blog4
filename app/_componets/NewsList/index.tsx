import { News } from "@/app/_libs/microcms";
import Category from "../Category";
import Date from "../Date";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <div>記事がありません</div>;
  }
  return (
    <>
      {news.map((news) => (
        <div key={news.id} className="">
          <h2>{news.title}</h2>
          <Category category={news.category} />
          <Date date={news.publishedAt} />
        </div>
      ))}
    </>
  );
}
