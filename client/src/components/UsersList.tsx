import { useSelector } from "react-redux";
import { List, ListItem, ListItemText } from "@mui/material";
import { selectUsers } from "../store/selectors";

export const UsersList = () => {
  const users = useSelector(selectUsers);

  return (
    <List>
      {users.map((user) => (
        <ListItem key={user}>
          <ListItemText>{user}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};
