import { useDispatch } from "react-redux";
import { FormEvent, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { sendMessage } from "../store/actions";

export const ChatInput = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!message) {
      return;
    }
    dispatch(sendMessage(message));
    setMessage("");
  };
  return (
    <Box sx={{ p: 3, display: "flex" }}>
      <TextField
        multiline
        maxRows={4}
        placeholder={"Enter message..."}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{ flexGrow: 1 }}
      />
      <Button onClick={handleSubmit}>Send</Button>
    </Box>
  );
};
