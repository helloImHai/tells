import React from "react";
import moment from "moment";
import axios from "axios";
import { Box, IconButton, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FavoriteBorder, Favorite } from "@material-ui/icons";
import { useGetLiked } from "../hooks/hooks";

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
  const vid = props.vid;
  const { tid, question, date_answered, answer } = props.tell;
  const classes = useStyles();
  let [liked, setLiked] = useGetLiked(tid, vid);
  const handleHeartClick = () => {
    if (liked.liked === 1) {
      return asyncUnlike(tid, vid);
    }
    return asyncLike(tid, vid);
  };

  function asyncUnlike(tid, vid) {
    const url = `${process.env.REACT_APP_API_URL}/likes/unlike`;
    axios
      .delete(url, {
        params: {
          tellId: tid,
          visitorId: vid,
        },
      })
      .then((res) => setLiked({ liked: 0, total: liked.total - 1 }))
      .catch((err) => alert("Data not synced, please refresh"));
  }

  function asyncLike(tid, vid) {
    const url = `${process.env.REACT_APP_API_URL}/likes/like`;
    axios
      .post(url, {
        tellId: tid,
        visitorId: vid,
      })
      .then((res) => setLiked({ liked: 1, total: liked.total + 1 }))
      .catch((err) => alert("Data not synced, please refresh"));
  }
  return (
    <Paper elevation={1} className={classes.tellPaper}>
      <Box className={classes.tellBox}>
        <Box display="flex" flexDirection="row">
          <Box>
            <Typography variant="h6">{question}</Typography>
            <Typography className={classes.time} variant="caption">
              {moment(date_answered).fromNow()}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            marginLeft="auto"
            alignItems="center"
          >
            <Typography>{liked.total}</Typography>
            <Box m={0}></Box>
            <IconButton onClick={handleHeartClick}>
              {liked.liked === 1 ? <Favorite /> : <FavoriteBorder />}
            </IconButton>
          </Box>
        </Box>
        <hr style={{ border: "1px solid rgb(246, 2, 87, 0.9)" }} />
        <Box m={2} />
        <Typography>{answer}</Typography>
      </Box>
    </Paper>
  );
};
