import { Grid } from "@material-ui/core";
import { MediaCard } from "./Card";

const cardContents = [
  {
    title: "タイトル1",
    content: "説明1",
    share: "共有",
    detail: "詳細",
    imageUrl: "https://joeschmoe.io/api/v1/random"
  },
  {
    title: "タイトル2",
    content: "説明2",
    share: "共有",
    detail: "詳細",
    imageUrl: "https://joeschmoe.io/api/v1/random"
  },
  {
    title: "タイトル3",
    content: "説明3",
    share: "共有",
    detail: "詳細",
    imageUrl: "https://joeschmoe.io/api/v1/random"
  }
];

export const List = () => {
  const getCardContents = (obj) => {
    return (
      <Grid item key={obj.title} xs={12} md={4} sm={6}>
        <MediaCard {...obj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {cardContents.map((obj) => getCardContents(obj))}
    </Grid>
  );
};
