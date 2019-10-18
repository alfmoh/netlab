import { Action } from "@ngrx/store";
import { Message } from "../models/message";

export enum MessageActionTypes {
  LoadMessages = "[Message] Load Messages",
  LoadMessagesFail = "[Message] Load Fail",
  LoadMessagesSuccess = "[Message] Load Success"
}

export class LoadMessages implements Action {
  readonly type = MessageActionTypes.LoadMessages;
}

export class LoadMessagesSuccess implements Action {
  readonly type = MessageActionTypes.LoadMessagesSuccess;
  constructor(public payload: Message[]) {}
}

export class LoadMessagesFail implements Action {
  readonly type = MessageActionTypes.LoadMessagesFail;
  constructor(public payload: string) {}
}

export type MessageActions = LoadMessages | LoadMessagesFail | LoadMessagesSuccess;
