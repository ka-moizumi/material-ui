import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  media: {
    height: 140
  }
});

export const MediaCard = (props) => {
  const { title, content, share, detail, imageUrl } = props;
  const classes = useStyles();

  return (
    <Card variant="outlined">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent align="left">
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {share}
        </Button>
        <Button size="small" color="primary">
          {detail}
        </Button>
      </CardActions>
    </Card>
  );
};
