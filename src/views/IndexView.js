import React from "react";
import { Question } from "../components/Question";
import { Tells } from "../components/Tells";
import { Container, Grid, Box } from "@material-ui/core";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { Introduction } from "../components/Introduction";
import { Footer } from "../components/Footer";
import { useHandleVisitorsLogic } from "../hooks/hooks";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const useStyles = makeStyles({
  indexContainer: {
    textAlign: "left",
  },
  indexBox: {
    minHeight: "100vh",
  },
});

const ITEM = "hfakhfdarweoDKFHSF";

export const IndexView = () => {
  const classes = useStyles();
  const visitor = useHandleVisitorsLogic();
  return (
    <ThemeProvider theme={darkTheme}>
      <Box className={classes.indexBox} bgcolor="background.default">
        <Container className={classes.indexContainer} maxWidth="md">
          <br></br>
          <Introduction />
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12} sm={8}>
              <div>
                <Question spacing={3} />
                <br />
                <br />
                <Tells vid={visitor.vid} />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Footer visitors={visitor.visitors} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};
