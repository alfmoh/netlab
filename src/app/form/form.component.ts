import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  constructor() {}
  model: any = {};
  topics = [
    "Тема 1", "Тема 2", "Тема 3", "Тема 4"
  ];

  ngOnInit() {}

  onSubmit() {
    console.log(this.model);
  }
}
