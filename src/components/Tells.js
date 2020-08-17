import React from "react";
import { Tell } from "./Tell";
import { Box, LinearProgress, Grid } from "@material-ui/core";
import { useGetTells } from "../hooks/hooks";

export const Tells = (props) => {
  let tells = useGetTells();

  return (
    <div>
      {props.vid !== 0 ? (
        <div>
          <Grid container direction="column" spacing={3}>
            {tells.map((tell, key) => (
              <Grid item key={key}>
                <Tell index={key + 1} tell={tell} vid={props.vid} />
              </Grid>
            ))}
          </Grid>
          <Box m={3} />{" "}
        </div>
      ) : (
        <LinearProgress color="secondary" />
      )}
    </div>
  );
};
