import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";

import { LoginPage } from "./LoginPage";
import { Chat } from "./Chat";

const App = () => {
  return (
    <Box sx={{ height: "100%" }}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<div>Not found</div>} />
      </Routes>
    </Box>
  );
};

export default App;
