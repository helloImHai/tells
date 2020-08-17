import axios from "axios";
import React, { useState } from "react";
import { Box, Button, TextField, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((state) => ({
  questionBackground: {
    padding: "20px 20px 10px 20px",
    borderRadius: 10,
    backgroundColor: "#222222",
  },
  arrowButton: {
    marginTop: "10px",
    marginLeft: "auto",
  },
}));

const MAX = 100;

export const Question = () => {
  const [question, setQuestion] = useState({
    questionText: "",
    questionLength: 0,
  });
  const classes = useStyles(question);

  function handleQuestionChange(event) {
    const questionStr = event.target.value;
    if (questionStr.length > MAX) {
      event.preventDefault();
      return;
    }
    setQuestion({
      questionText: questionStr,
      questionLength: questionStr.length,
    });
  }

  function handleSubmitQuestion() {
    if (question.questionText === "") {
      alert("Hey, that's not a question");
      return;
    }

    postQuestion();

    setQuestion({
      questionText: "",
      questionLength: 0,
    });
  }

  function postQuestion() {
    const url = `${process.env.REACT_APP_API_URL}/tell/new`;
    axios
      .post(url, { question: question.questionText })
      .then((res) =>
        alert(`Question submitted, I'll get back to you in a while!`)
      )
      .catch((err) =>
        alert(
          "Something is wrong with your question :( Just kidding, I probly did something wrong, feel free to pm me this question lol"
        )
      );
  }

  return (
    <Paper
      className={classes.questionBackground}
      elevation={0}
      variant="outlined"
    >
      <TextField
        className={classes.questionField}
        id="utlined-multiline-flexible"
        label="Ask me anything"
        rows={2}
        placeholder="What's your favourite food?"
        color="secondary"
        value={question.questionText}
        fullWidth
        onChange={(event) => handleQuestionChange(event)}
      />
      <Box display="flex" flexDirection="row">
        <Typography variant="caption">
          {MAX - question.questionLength}
        </Typography>
        <Button className={classes.arrowButton} onClick={handleSubmitQuestion}>
          <SendIcon />
        </Button>
      </Box>
    </Paper>
  );
};
