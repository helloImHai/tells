import React from "react";
import moment from "moment";
import { Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  tellPaper: {
    borderRadius: 10,
    padding: "20px 30px 15px 30px",
  },
  tellBox: {},
  time: {
    opacity: 0.7,
  },
});

export const Tell = (props) => {
  const classes = useStyles();
  return (
    <Paper elevation={1} className={classes.tellPaper}>
      <Box className={classes.tellBox}>
        <Typography variant="h6">{props.tell.question}</Typography>
        <Typography className={classes.time} variant="caption">
          {moment(props.tell.date_answered).fromNow()}
        </Typography>
        <hr style={{ border: "1px solid rgb(246, 2, 87, 0.9)" }} />
        <Box m={2} />
        <Typography>{props.tell.answer}</Typography>
      </Box>
    </Paper>
  );
};
