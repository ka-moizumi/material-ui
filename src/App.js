import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Create } from "./components/Create";
import { List } from "./components/list/List";
import { Edit } from "./components/Edit";

import "./styles.css";
import { NotFound } from "./components/NotFound";
import { Header } from "./components/Header";
import { Grid } from "@material-ui/core";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Grid container direction="column">
          <Grid item>
            <Header />
          </Grid>
          <br />
          <Grid container>
            <Grid item xs={12}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/list" element={<List />} />
                <Route path="/edit" element={<Edit />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Grid>
          </Grid>
        </Grid>
      </BrowserRouter>
    </div>
  );
}
