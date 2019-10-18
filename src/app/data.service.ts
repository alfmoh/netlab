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
        username: "Ivan",
        email: "abc@abc.com",
        topic: "hello",
        message: "Hey!!"
      },
      {
        id: 2,
        username: "Ivan",
        email: "abc@abc.com",
        topic: "hello",
        message: "Hey!!"
      }
    ];
    return { messages };
  }
}
