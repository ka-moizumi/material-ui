import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  tabBar: {
    minHeight: "37px"
  }
}));

export const NavTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          className={classes.tabBar}
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab
            className={classes.tabBar}
            label="あ"
            href="/a"
            {...a11yProps(0)}
          />
          <LinkTab
            className={classes.tabBar}
            label="い"
            href="/i"
            {...a11yProps(1)}
          />
          <LinkTab
            className={classes.tabBar}
            label="う"
            href="/u"
            {...a11yProps(2)}
          />
          <LinkTab
            className={classes.tabBar}
            label="え"
            href="/e"
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        あ
      </TabPanel>
      <TabPanel value={value} index={1}>
        い
      </TabPanel>
      <TabPanel value={value} index={2}>
        う
      </TabPanel>
      <TabPanel value={value} index={3}>
        え
      </TabPanel>
    </div>
  );
};
