import {
  MessageActions,
  MessageActionTypes
} from "../actions/message.actions";
import { Message } from "../models/message";
import {
  ActionReducerMap,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";

export interface MessageState {
  messages: Message[];
  error: string;
}

export interface State {
  message: MessageState;
}

const initialMessageState: MessageState = {
  messages: null,
  error: ""
};

export const selectMessage = (state: State) => state.message;


export function messageReducer(
  state: MessageState = initialMessageState,
  action: MessageActions
): MessageState {
  switch (action.type) {
    case MessageActionTypes.LoadMessages:
      return {
        ...state
      };
    case MessageActionTypes.LoadMessagesSuccess:
      return {
        ...state,
        messages: action.payload,
        error: ""
      };
    case MessageActionTypes.LoadMessagesFail:
      return {
        ...state,
        messages: null,
        error: action.payload
      };
    default:
      return state;
  }
}

export const reducers: ActionReducerMap<State> = {
  message: messageReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
