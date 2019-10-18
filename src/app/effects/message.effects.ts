// import { LoadMessages } from './../actions/user.actions';
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { MessageService } from "../message.service";
import { map, catchError, switchMap } from "rxjs/operators";
import { of } from "rxjs";
import { MessageActionTypes, LoadMessagesSuccess, LoadMessagesFail, LoadMessages } from "../actions/message.actions";

@Injectable()
export class MessageEffects {
  constructor(
    private actions$: Actions,
    private messageService: MessageService
  ) {}
  @Effect()
  loadMessages = this.actions$.pipe(
    ofType(MessageActionTypes.LoadMessages),
    switchMap(() =>
      this.messageService.getMessages().pipe(
        map(messages =>  new LoadMessagesSuccess(messages)),
        catchError(err => of(new LoadMessagesFail(err)))
      )
    )
  );
}
