import { Message } from "./models/message";
import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: "root"
})
export class DataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const messages: Message[] = [
      {
        id: 1,
        username: "Иван Иванович",
        email: "info@mail.com",
        topic: "Тема 1",
        message: "Hey!!"
      }
    ];
    return { messages };
  }
}
