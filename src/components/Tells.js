import React from "react";
import { Tell } from "./Tell";
import { Box, Grid } from "@material-ui/core";
import { useGetTells } from "../hooks/hooks";

export const Tells = () => {
  let tells = useGetTells();

  return (
    <div>
      <Grid container direction="column" spacing={3}>
        {tells.map((tell, key) => (
          <Grid item key={key}>
            <Tell index={key + 1} tell={tell} />
          </Grid>
        ))}
      </Grid>
      <Box m={3} />
    </div>
  );
};
