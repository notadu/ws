import { takeEvery, select, all, fork, put } from "redux-saga/effects";
import { ActionType } from "typesafe-actions";
import { sendMessage, join, login } from "./actions";
import { selectCurrentUser } from "./selectors";

export function* rootSaga(socket: WebSocket) {
  yield all([
    fork(() => messagesSaga(socket)),
    fork(() => jointUserSaga(socket)),
    fork(() => loginUserSaga()),
  ]);
}

export function* messagesSaga(socket: WebSocket) {
  yield takeEvery(sendMessage, sendMessagesHandler, socket);
}

function* sendMessagesHandler(
  webSocket: WebSocket,
  action: ActionType<typeof sendMessage>
) {
  const name: string = yield select(selectCurrentUser);
  const message: WsMessageText = {
    type: "message",
    data: {
      user: name,
      message: action.payload,
    },
  };
  webSocket.send(JSON.stringify(message));
}

export function* jointUserSaga(socket: WebSocket) {
  yield takeEvery(join, joinUserHandler, socket);
}

function* joinUserHandler(
  webSocket: WebSocket,
  action: ActionType<typeof join>
) {
  const message: WsMessage = {
    type: "join",
    data: {
      name: action.payload,
    },
  };
  webSocket.send(JSON.stringify(message));
}

export function* loginUserSaga() {
  yield takeEvery(login, loginUserHandler);
}

function* loginUserHandler(action: ActionType<typeof login>) {
  localStorage.setItem("user", action.payload);
  yield put(join(action.payload));
}
