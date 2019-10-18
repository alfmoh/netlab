import { LoadMessages } from "./actions/message.actions";
import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { State, selectMessage } from "../app/reducers/index";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private store: Store<State>) {
    this.store.pipe(select(selectMessage)).subscribe(console.log);
  }

  ngOnInit() {
    this.store.dispatch(new LoadMessages());
  }
}
