import React from "react";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import profilePic from "../assets/profile.png";

const useStyles = makeStyles({
  daddyGrid: {
    marginBottom: "40px",
    paddingRight: "10px",
  },
  profilePic: {
    marginTop: "20px",
    height: "110px",
    borderRadius: "55px",
    borderColor: { main: "#550000" },
    borderWidth: "2px",
    boxShadow: "0px 0px 0px 5px rgba(255, 255, 255, 0.5)",
  },
  profilePicGrid: {
    textAlign: "center",
  },
  invisibleBackground: {
    backgroundColor: "rgb(0, 0, 0, 0)",
  },
});

export const Introduction = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.invisibleBackground} elevation={0}>
      <Grid className={classes.daddyGrid} container direction="row" spacing={3}>
        <Grid className={classes.profilePicGrid} item xs={12} sm={3}>
          <img
            className={classes.profilePic}
            src={profilePic}
            alt="profile-pic"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <br></br>
          <Box fontWeight="fontWeightBold" fontSize={24}>
            helloImHai
          </Box>
          <hr />
          <Box textAlign="justify">
            <Typography variant="subtitle2">
              I heard that projects helped with getting internship, and I'm
              desperate. Please ask me questions, and I'll answer the PG13 ones.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
