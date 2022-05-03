interface WsMessage {
  type: "message" | "join";
  data: any;
}

interface WsMessageText extends WsMessage {
  type: "message";
  data: {
    message: string;
    user: string;
  };
}

interface AppState {
  messages: WsMessage[];
  user: string;
  users: string[];
}
