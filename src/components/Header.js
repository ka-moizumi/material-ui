import React, { useState } from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  toolBar: {
    minHeight: "30px"
  }
});

export const Header = () => {
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);
  const [title, setTitle] = useState();
  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setToggle(open);
  };

  const indexList = [
    { text: "ホーム", link: "/" },
    { text: "作成", link: "/create" },
    { text: "一覧", link: "/list" },
    { text: "編集", link: "/edit" }
  ];

  const indexListClick = (text) => {
    navigate(text.link);
    setTitle(text.text);
  };

  const indexIcons = [
    <HomeRoundedIcon />,
    <AddCircleOutlineRoundedIcon />,
    <ListAltRoundedIcon />,
    <EditRoundedIcon />
  ];

  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {indexList.map((text, index) => (
          <ListItem button key={text.text} onClick={() => indexListClick(text)}>
            <ListItemIcon>{indexIcons[index]}</ListItemIcon>
            <ListItemText primary={text.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
        </Toolbar>
        <Drawer open={toggle} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </AppBar>
    </Box>
  );
};
