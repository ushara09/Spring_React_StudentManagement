//import * as React from "react";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@material-ui/core";

export default function Student() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  return (
    <Box
      component="form"
      sx={
        {
          // "& > :not(style)": { m: 1, width: "25ch" },
        }
      }
      noValidate
      autoComplete="off"
    >
      <Container>
        <form>
          <TextField
            id="standard-basic"
            label="Student Name"
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Student Address"
            variant="standard"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </form>

        {name}
        {address}
      </Container>
    </Box>
  );
}
