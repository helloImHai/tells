import React from "react";
import { Box, Grid, IconButton, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Facebook, Instagram, LinkedIn } from "@material-ui/icons";
import { useGetTells } from "../hooks/hooks";

const useStyles = makeStyles({
  invisisbleBackground: {
    backgroundColor: "rgb(0, 0, 0, 0)",
    textAlign: "center",
  },
});

export const Footer = (props) => {
  const tells = useGetTells();
  const visitors = props.visitors;
  return (
    <Paper className={useStyles().invisisbleBackground} elevation={0}>
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={4}>
          <Typography variant="h4">{tells.length}</Typography>
          <Typography variant="subtitle2">Tells</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h4">{visitors}</Typography>
          <Typography variant="subtitle2">Visitors</Typography>
        </Grid>
        <Grid item xs={2} />
      </Grid>
      <Box m={2} />
      <Grid container>
        <Grid item xs={4}>
          <IconButton
            href="https://www.facebook.com/profile.php?id=100033460157841"
            target="_blank"
          >
            <Facebook fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item xs={4}>
          <IconButton
            href="https://www.instagram.com/hainguyen__/"
            target="_blank"
          >
            <Instagram fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item xs={4}>
          <IconButton
            href="https://www.linkedin.com/in/hai-nguyen-246346194/"
            target="_blank"
          >
            <LinkedIn fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
      <Box m={4} />
      <Typography variant="caption">
        Style heavily inspired by (copied from) askFM
        <br />
        Code by me
        <br />© 2020 Hai Nguyen
      </Typography>
    </Paper>
  );
};
