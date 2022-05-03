import { ActionType, createAction } from "typesafe-actions";

export const join = createAction("JOIN_CHAT")<string>();
export const login = createAction("LOGIN")<string>();
export const addMessage = createAction("ADD_MESSAGE")<WsMessageText>();
export const sendMessage = createAction("SEND_MESSAGE")<string>();
export const addUser = createAction("ADD_USER")<string>();

export type AppActions = ActionType<
  typeof login | typeof join | typeof addMessage | typeof addUser
>;
