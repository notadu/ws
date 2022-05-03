import { useDispatch, useSelector } from "react-redux";
import { AppBar, Box, Drawer, Toolbar, Typography } from "@mui/material";

import { selectCurrentUser } from "../store/selectors";

import { UsersList } from "./UsersList";
import { UserInfo } from "./UserInfo";
import { MessagesList } from "./MessagesList";
import { ChatInput } from "./ChatInput";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Chat = () => {
  const name = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("login");
    }
  }, []);

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chat
          </Typography>
          <UserInfo />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: 300,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 300, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <UsersList />
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          display: "grid",
          gridTemplateRows: "auto 1fr min-content",
        }}
      >
        <Toolbar />
        <MessagesList />
        <ChatInput />
      </Box>
    </Box>
  );
};
