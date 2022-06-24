import { Grid } from "@material-ui/core";
import { NavTabs } from "./tab";

export const Home = () => {
  return (
    <Grid container>
      <Grid item xs={false} sm={1} />
      <Grid item xs={12} sm={10}>
        <NavTabs />
      </Grid>
      <Grid item xs={false} sm={1} />
    </Grid>
  );
};
