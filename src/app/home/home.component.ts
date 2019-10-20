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
  constructor(private store: Store<State>) {
    // this.store.pipe(select(selectMessage)).subscribe(console.log);
  }

  ngOnInit() {
    this.store.dispatch(new LoadMessages());
  }
}
