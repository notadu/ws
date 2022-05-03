import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, styled, TextField } from "@mui/material";

import { login } from "../store/actions";
import { selectCurrentUser } from "../store/selectors";

const StyledForm = styled("form")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const LoginPage = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectCurrentUser);

  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    if (userName) {
      navigate("/");
    }
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setName(name);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name) {
      return;
    }
    dispatch(login(name));
    navigate("/");
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StyledForm onSubmit={handleSubmit}>
        <TextField label="Name" value={name} onChange={handleChange} />
        <Button type="submit">Login</Button>
      </StyledForm>
    </Box>
  );
};
