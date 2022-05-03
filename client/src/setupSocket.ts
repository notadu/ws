import { Dispatch } from "redux";
import { addMessage, addUser, AppActions, join } from "./store/actions";

const URL = "ws://localhost:3030";

const setupSocket = (dispatch: Dispatch<AppActions>, store: AppState) => {
  const ws = new WebSocket(URL);

  ws.onopen = () => {
    console.log("connected");
    const user = store.user;
    if (user) {
      dispatch(join(user));
    }
  };
  ws.onclose = () => {
    console.log("disconnected");
  };

  ws.onmessage = (evt) => {
    // on receiving a message, add it to the list of messages
    const message: WsMessage = JSON.parse(evt.data);
    if (message.type === "message") {
      dispatch(addMessage(message as WsMessageText));
    }
    if (message.type === "join") {
      dispatch(addUser(message.data.name));
    }
  };
  return ws;
};

export default setupSocket;
