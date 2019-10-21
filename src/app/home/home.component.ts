import { MessageState } from "./../reducers/index";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { selectMessage, State } from "../reducers";
import { LoadMessages } from "../actions/message.actions";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  data$: Observable<MessageState>;
  constructor(private store: Store<State>) {
    this.data$ = this.store.pipe(select(selectMessage));
  }

  ngOnInit() {
    this.store.dispatch(new LoadMessages());
  }
}
