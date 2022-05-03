import React from "react";
import { useSelector } from "react-redux";

import {
  alpha,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

import { selectCurrentUser, selectMessages } from "../store/selectors";

export const MessagesList = () => {
  const messages = useSelector(selectMessages);
  const userName = useSelector(selectCurrentUser);

  return (
    <List sx={{ overflow: "auto" }}>
      {messages.map(({ data }, index) => (
        <ListItem
          key={index}
          className={`MessageItem ${
            userName === data.user ? "MessageItem--reverse" : ""
          }`}
          sx={{
            "& .MuiListItemText-root": {
              flexGrow: 0,
              backgroundColor:
                userName === data.user ? "#9cc1cf" : alpha("#9cc1cf", 0.5),
              padding: "20px",
              borderRadius: "20px",
            },

            ...(userName === data.user
              ? {
                  flexDirection: "row-reverse",
                  alignSelf: "flex-end",
                  "& .MuiAvatar-root": {
                    marginLeft: "auto",
                  },
                }
              : {}),
          }}
        >
          <ListItemAvatar>
            <Avatar>{data.user.slice(0, 1).toUpperCase()}</Avatar>
          </ListItemAvatar>
          <ListItemText>{data.message}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};
