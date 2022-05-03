import { createReducer } from "typesafe-actions";
import { AppActions } from "./actions";

const initialState: AppState = {
  messages: [],
  user: localStorage.getItem("user") ?? "",
  users: [],
};

export const appReducer = createReducer<AppState, AppActions>(initialState, {
  LOGIN: (state, { payload }) => ({
    ...state,
    user: payload,
  }),
  ADD_MESSAGE: (state, { payload }) => ({
    ...state,
    messages: [...state.messages, payload],
  }),
  ADD_USER: (state, { payload }) => ({
    ...state,
    users: [...state.users, payload],
  }),
});
