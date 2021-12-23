//import * as React from "react";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Button, Paper } from "@material-ui/core";

export default function Student() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [students, setStudents] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, address };
    console.log(student);
    fetch("http://localhost:8081/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => console.log("New Student added"));
  };

  useEffect(() => {
    fetch("http://localhost:8081/student/getAll")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  });

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
          <Button variant="outlined" onClick={handleClick}>
            Submit
          </Button>
        </form>

        <Paper elevation={3}>
          {students.map((student) => (
            <Paper
              elevation={6}
              style={{ margin: "10px", padding: "15px", textAlign: "left" }}
              key={student.id}
            >
              ID:{student.id}
              Name:{student.name}
              Address:{student.address}
            </Paper>
          ))}
        </Paper>
      </Container>
    </Box>
  );
}
