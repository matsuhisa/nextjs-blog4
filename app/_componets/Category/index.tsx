import { Category } from "@/app/_libs/microcms";

type Props = {
  category: Category;
};

export default function Category({ category }: Props) {
  return (
    <p>
      {category.name}
    </p>
  );
}
