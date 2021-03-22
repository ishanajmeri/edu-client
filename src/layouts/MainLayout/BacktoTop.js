import React from "react";

import { makeStyles } from "@material-ui/core";
// import Grid from "@material-ui/core/Grid";
// import IconButton from "@material-ui/core/IconButton";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(15),
    right: theme.spacing(2),
  },
}));

const BacktoTop = (props) => {
  const classes = useStyles();

  const trigger = useScrollTrigger({});
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Zoom in={trigger}>
      <div onClick={scrollToTop} role="presentation" className={classes.root}>
        <Fab /* color="primary" */ size="small" aria-label="scroll back to top">
          <ArrowUpwardIcon />
        </Fab>
      </div>
    </Zoom>
  );
};

export default BacktoTop;
